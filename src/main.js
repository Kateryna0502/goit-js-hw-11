// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import { searchImages } from './js/pixabay-api';
// import { displayImages } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';
import { displayImages } from './js/render-functions';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.getElementById('loader');

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });

let query;
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    query = searchInput.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!'
        });
        return;
    }
loader.style.display = 'block';
    searchImages(query).then((data) => {
    if (data.hits.length === 0) {
        iziToast.error({
            title: 'Sorry',
            message: 'There are no images matching your search query. Please try again!'
        });
    } else {
        displayImages(data.hits);
        lightbox.refresh();
        }    
    })
               
        .catch((error) => {
    iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.'
    })
}).finally(() => {
    loader.style.display = 'none';
    searchForm.reset();
})
    
     
})








