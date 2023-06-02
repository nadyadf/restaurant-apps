import data from '../DATA.json';

let makeCard = '';

for (let i = 0; i < data.restaurants.length; i++) {
  makeCard += `
        <article class="menu-card">
            <div class="city-name">
                <p>Kota ${data.restaurants[i].city}</p>
            </div>
            <figure class="menu-image">
                <img src="${data.restaurants[i].pictureId}" alt="${data.restaurants[i].name}">
            </figure>
            <div class="menu-info">
                <p class="rating">Rating: ${data.restaurants[i].rating}</p>
                <h2 class="menu-name">${data.restaurants[i].name}</h2>
                <p class="description">${data.restaurants[i].description}</p>
            </div>
        </article>
    `;
}

document.getElementById('menu-list').innerHTML += makeCard;

console.log(data.restaurants);
