const refs = {
  body: document.querySelector('body'),
  checkBox: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChangeLocalstorage = () => {
  if (localStorage.getItem('key') === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.checkBox.checked = true;
  }
};
themeChangeLocalstorage();

const themeChange = () => {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('key', refs.body.classList);
  } else {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('key', refs.body.classList);
  }
};

refs.checkBox.addEventListener('change', themeChange);
