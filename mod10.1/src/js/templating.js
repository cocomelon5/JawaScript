import posts from '../menu.json';
import postItemTemplate from '../templates/post-item.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

function buildMenu() {
  const markup = posts.map(post => postItemTemplate(post)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(posts);
