import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';
import { displayImages } from './js/render-functions';

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const loader = document.getElementById('loader');

    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const query = searchInput.value.trim();

        if (query === '') {
            iziToast.error({
                title: 'Error',
                message: 'Search query cannot be empty!'
            });
            return;
        }
    })

        loader.style.display = 'block';

        
        const images = searchImages(query);
        if (images.length === 0) {
            images.then(data => displayImages(data.hits));
            iziToast.error({
                title: 'Sorry',
                message: 'There are no images matching your search query. Please try again!'
            });
        } else {
            displayImages(images);
        }
    } images.catch(err => {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.'
        });
    }; 
        images.finally {
            loader.style.display = 'none'; 
        }
    });
});



