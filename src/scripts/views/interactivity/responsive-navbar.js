const appBar = document.getElementById('app-bar');
const toggleButton = document.getElementById('app-bar--toggler');
const mainElement = document.getElementById('main-content');

toggleButton.addEventListener('click', () => {
  if (appBar.className === 'app-bar') {
    appBar.classList.add('responsive');
  } else {
    appBar.classList.remove('responsive');
  }
});

mainElement.addEventListener('click', () => {
  appBar.classList.remove('responsive');
});
