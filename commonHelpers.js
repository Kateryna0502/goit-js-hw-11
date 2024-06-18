import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(n){const o="https://pixabay.com",r="/api/",s=new URLSearchParams({key:"44428976-d6e941eddcd51cc03234da6bf",q:image,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${s}`;return console.log(e),fetch(e).then(t=>t.json()).catch(t=>{})}let l;function u(n){const o=document.getElementById("gallery");o.innerHTML=n.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}" class="gallery-link">
                <img src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${r.likes}</p>
                <p><strong>Views:</strong> ${r.views}</p>
                <p><strong>Comments:</strong> ${r.comments}</p>
                <p><strong>Downloads:</strong> ${r.downloads}</p>
            </div>
        </li>
    `).join(""),l?l.refresh():l=new c(".gallery a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("search-form"),o=document.getElementById("search-input"),r=document.getElementById("loader");n.addEventListener("submit",s=>{s.preventDefault();const e=o.value.trim();if(e===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}r.style.display="block";try{const t=d(e);t.length===0?i.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"}):u(t)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{r.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map
