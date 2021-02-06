'use strict';
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

gallery.style.listStyle = 'none';
gallery.style.padding = '0';

const aa = images.map(el => {
  const item = `
    <li>
      <img src="${el.url}" alt="${el.alt}" width="100%">
    </li>
  `;
  return item;
  // image.style.marginBottom = '20px';
  // image.style.width = '100%';

  // image.setAttribute('src', `${el.url}`);
  // image.setAttribute('alt', `${el.alt}`);

  // galleryItem.append(image);
  // console.log(galleryItem);
});
const bb = aa.join('');
console.log(aa);
console.log(bb);
gallery.insertAdjacentHTML('beforeend', bb);
