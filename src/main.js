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

        loader.style.display = 'block'; 

        try {
            const images = searchImages(query);
            if (images.length === 0) {
                iziToast.error({
                    title: 'Sorry',
                    message: 'There are no images matching your search query. Please try again!'
                });
            } else {
                displayImages(images);
            }
        } catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        } finally {
            loader.style.display = 'none'; // Приховуємо індикатор завантаження
        }
    });
});



// import { getImage } from './js/pixabay-api.js';
// import { marcupImage, showLoader, hideLoader } from './js/render-functions.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import 'simplelightbox/dist/simple-lightbox.min.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// export const refs = {
//   formSearch: document.querySelector('#search'),
//   inputImgSearch: document.querySelector('.input-img-search'),
//   imgGallery: document.querySelector('.gallery'),
//   loader: document.querySelector('.loader'),
// };

// refs.formSearch.addEventListener('submit', event => {
//   event.preventDefault();
//   const imgKeyWord = refs.inputImgSearch.value.trim();
//   console.log(imgKeyWord);
//   if (imgKeyWord === '') {
//     iziToast.error({
//       title: 'Error',
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//     });
//     return;
//     refs.imgGallery.innerHTML = '';
//   } else {
//     showLoader();
//     getImage(imgKeyWord)
//       .then(data => marcupImage(data))
//       .catch(err => {});
//     hideLoader();
//   }
//   refs.formSearch.reset();
// });