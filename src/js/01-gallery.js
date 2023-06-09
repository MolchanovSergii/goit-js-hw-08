// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallerySecond = document.querySelector('.gallery');
const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `
  )
  .join('');

gallerySecond.insertAdjacentHTML('beforeend', markupGallery);

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};
const gallery = new SimpleLightbox('.gallery a', options);
