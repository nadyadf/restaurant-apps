import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './views/interactivity/responsive-navbar';
import App from './views/app';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
});
