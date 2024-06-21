import{i as a}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(s){const r="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"44428976-d6e941eddcd51cc03234da6bf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${n}`;return console.log(e),fetch(e).then(t=>t.json()).catch(t=>{})}function m(s){const r=document.getElementById("gallery");r.innerHTML=s.map(o=>`
        <li class="gallery-item">
            <a href="${o.largeImageURL}" class="gallery-link">
                <img src="${o.webformatURL}" alt="${o.tags}">
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${o.likes}</p>
                <p><strong>Views:</strong> ${o.views}</p>
                <p><strong>Comments:</strong> ${o.comments}</p>
                <p><strong>Downloads:</strong> ${o.downloads}</p>
            </div>
        </li>
    `).join("")}const c=document.getElementById("search-form"),f=document.getElementById("search-input"),d=document.getElementById("loader");let l;c.addEventListener("submit",s=>{if(s.preventDefault(),d.style.display="block",l=f.value.trim(),l===""){a.error({title:"Error",message:"Search query cannot be empty!"});return}u(l).then(r=>{r.hits.length===0?a.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"}):m(r.hits)}).catch(r=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{d.style.display="none",c.reset()}),lightbox?lightbox.refresh():lightbox=new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
