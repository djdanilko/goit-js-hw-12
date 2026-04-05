import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollToNewImages,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const btnLoadMore = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
const limit = 15;

form.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) return;

  currentQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    currentPage += 1;

    const totalPages = Math.ceil(data.totalHits / limit);
    if (currentPage > totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.show({
      message: 'We are sorry, but you have reached the end of search results.',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more images to load",
        messageColor: 'white',
        backgroundColor: 'red',
      });
      return;
    }

    createGallery(data.hits);
    scrollToNewImages();
    currentPage += 1;

    const totalPages = Math.ceil(data.totalHits / limit);
    if (currentPage > totalPages) {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.show({
      message: 'An error occurred while loading more images. Please try again.',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
