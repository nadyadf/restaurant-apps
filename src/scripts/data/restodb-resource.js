import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbResource {
  static async restolist() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchResto() {
    const response = await fetch(API_ENDPOINT.SEARCH);
    const responseJson = response.json();
    return responseJson;
  }

  static async restoReview() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = response.json();
    return responseJson;
  }
}

export default RestoDbResource;
