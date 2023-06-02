import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <article class="resto-item">
    <div class="resto-item__city">
        <p>Kota ${resto.city}</p>
    </div>
  <figure class="resto-item__image">
      <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
  </figure>
  <div class="resto-item__info">
      <p class="resto-item__rating">Rating: ${resto.rating}</p>
      <a class="resto-item__name" href="/#/detail/${resto.id}" target="_blank">${resto.name}</a>
      <p class="resto-item__description">${resto.description}</p>
  </div>
  </article>
`;

const createRestoDetailTemplate = (resto) => `
    <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
    <h2 class="resto__title">${resto.name}</h2>
    <div class="resto__info">
      <h3>Detail Info</h3>
      <h4>Description</h4>
      <p>${resto.description}</p>
      <h4>City</h4>
      <p>${resto.city}</p>
    </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
};
