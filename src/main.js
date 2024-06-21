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

let query;
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    loader.style.display = 'block';
    query = searchInput.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!'
        });
        return;
    }

    searchImages(query).then((data) => {
    if (data.hits.length === 0) {
        iziToast.error({
            title: 'Sorry',
            message: 'There are no images matching your search query. Please try again!'
        });
    } else {
        displayImages(data.hits);
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
 if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
    }
    
})








