import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, skipToContentButton,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipToContentButton = skipToContentButton;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
