import ExploreResto from '../views/pages/explore-resto';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ExploreResto, // root page
  '/home': ExploreResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
