'use strict';
import arrayOfImages from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
// debugger;
function createOneItemMarkup({ preview, original, description }) {
  const itemMarkup = `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href=${original}
    >
        <img
          class="gallery__image"
          src=""
          data-smallimg=${preview}
          data-source=${original}
          alt=${description}
        />
    </a>
  </li>
`;
  return itemMarkup;
}
function createFinalMarkup(images) {
  return images.reduce(
    (imagesMarkup, image) => (imagesMarkup += createOneItemMarkup(image)),
    '',
  );
}
const finalMarkup = createFinalMarkup(arrayOfImages);
// console.log(finalMarkup);
gallery.insertAdjacentHTML('beforeend', finalMarkup);
//
//
//
//
//
//
//
//
const lazyLoad = target => {
  const options = { rootMargin: '150px 0px' };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      //   console.log(entry.target);
      if (entry.isIntersecting) {
        const img = entry.target;
        const smallImageUrl = img.dataset.smallimg;
        img.setAttribute('src', smallImageUrl);

        observer.disconnect();
        // console.log(img);
      }
    });
  }, options);
  observer.observe(target);
};

const images = document.querySelectorAll('.gallery__image');
images.forEach(image => lazyLoad(image));
// console.log(images);
//
//
//
//
//
//
const modalBox = document.querySelector('.js-lightbox');
const fullImage = modalBox.querySelector('img');
const backdrop = modalBox.querySelector('.lightbox__overlay');
// const closeModalBtn = modalBox.querySelector(
//   'button[data-action="close-lightbox"]',
// );

gallery.addEventListener('click', handleClick);
// closeModalBtn.addEventListener('click', closeModal);
modalBox.addEventListener('click', handleBackdropClick);

let currentLi;

function handleClick(event) {
  event.preventDefault();

  const target = event.target;
  // console.log('target ', target);
  // console.log('current targ ', event.currentTarget);
  if (target === event.currentTarget) return;
  currentLi = target.closest('li');

  openModal();

  fullImage.src = target.dataset.source;
  // console.log(fullImage);
}

function openModal() {
  modalBox.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);
}

function handleBackdropClick(event) {
  // console.log('target: ', event.target);
  // console.log('current: ', event.currentTarget);

  // if (event.target !== event.currentTarget) {
  //   return;
  // }

  // if (
  //   event.target.nodeName !== 'BUTTON' ||
  //   event.target !== backdrop
  // ) {
  //   return;
  // }

  if (event.target.nodeName !== 'BUTTON' && event.target !== backdrop) {
    return;
  }

  closeModal();
}

function closeModal() {
  modalBox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
  fullImage.src = '';
}

function handleKeyPress(event) {
  arrowPress(event);
  if (event.code !== 'Escape') {
    return;
  }

  closeModal();
}

function arrowPress(event) {
  let currentImg = currentLi.querySelector('img');
  const previousLi = currentLi.previousElementSibling;
  // console.log(previousLi);
  const nextLi = currentLi.nextElementSibling;
  const previousImg = previousLi.querySelector('img');
  const nextImg = nextLi.querySelector('img');

  if (event.code === 'ArrowLeft') {
    fullImage.src = previousImg.dataset.source;
    currentLi = previousLi;
  }

  if (event.code === 'ArrowRight') {
    fullImage.src = nextImg.dataset.source;
    currentLi = nextLi;
  }
}
