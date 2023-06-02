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
      <a class="resto-item__name" href="/#/detail/${resto.id}">${resto.name}</a>
      <p class="resto-item__description">${resto.description}</p>
  </div>
  </article>
`;

const createRestoDetailTemplate = (resto) => {
  let categoriesElement = '';
  let foodsElement = '<th>Foods</th>';
  let drinksElement = '<th>Drinks</th>';
  let reviewsElement = '';

  resto.categories.forEach((category) => {
    categoriesElement += `<p class="category">${category.name}</p>`;
  });

  resto.menus.foods.forEach((food) => {
    foodsElement += `
    <tr>
      <td><i class="fa-solid fa-pizza-slice" style="color: #8aa8db;"></i> ${food.name}</td>
    </tr>`;
  });

  resto.menus.drinks.forEach((drink) => {
    drinksElement += `
    <tr>
      <td><i class="fa-solid fa-mug-hot" style="color: #8aa8db;"></i> ${drink.name}</td>
    </tr>`;
  });

  resto.customerReviews.forEach((review) => {
    reviewsElement += `
      <div class="reviewContainer">
        <h3 class="customerName">${review.name}</h3>
        <p class="review">${review.review}</p>
        <p class="reviewDate">${review.date}</p> 
      </div>
    `;
  });

  return `
      <h2 class="resto__title">${resto.name}</h2>
      <h3>${resto.city}</h3>
      <div class="categories">${categoriesElement}</div>
      <div class="resto__data">
        <figure class="resto__image-container">
          <img src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}">
          <figcaption>Rating: <span>${resto.rating}</span></figcaption>
        </figure>
        <div class="resto__info">
          <h4>Description</h4>
          <p>${resto.description}</p>
          <h4>Address</h4>
          <p>${resto.address}</p>
          <h4>Menu Lists</h4>
          <div class="resto__menu-list">
            <table>
              ${foodsElement}
            </table>
            <table>
              ${drinksElement}
            </table>
          </div>
        </div>
      </div>
      <h2>Reviews</h2>
      <div class="reviews">
        ${reviewsElement}
      </div>
`;
};

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
};
