import UrlParser from '../../routes/url-parser';
import RestoDbResource from '../../data/restodb-resource';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <h1 class="content__heading">Detail Restaurant</h1>
        <div class="restaurant" id="restaurant"></div>
        <div id="likeButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const resto = await RestoDbResource.detailResto(id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        rating: resto.rating,
        city: resto.city,
        description: resto.description,
      },
    });
  },
};

export default Detail;
