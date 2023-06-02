import RestoDbResource from '../../data/restodb-resource';
import { createRestoItemTemplate } from '../templates/template-creator';

const ExploreResto = {
  async render() {
    return `
    <section class="jumbotron">
      <img src="./images/heros/hero-image_2.jpg" alt="hero-image">
    </section>
    <section class="content">
      <h1 class="content__heading">Explore Restaurant</h1>
      <div class="restaurants" id="restaurants"></div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDbResource.restolist();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((resto) => {
      console.log(resto);
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ExploreResto;
