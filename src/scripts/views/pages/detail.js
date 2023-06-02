import UrlParser from '../../routes/url-parser';
import RestoDbResource from '../../data/restodb-resource';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <h1 class="content__heading">Detail Restaurant</h1>
        <div class="restaurant" id="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const resto = await RestoDbResource.detailResto(id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
  },
};

export default Detail;
