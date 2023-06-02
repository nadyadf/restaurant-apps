import ExploreResto from '../views/pages/explore-resto';
import Detail from '../views/pages/detail';

const routes = {
  '/': ExploreResto, // root page
  '/home': ExploreResto,
  '/detail/:id': Detail,
};

export default routes;
