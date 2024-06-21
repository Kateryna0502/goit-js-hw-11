import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const o="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"44428976-d6e941eddcd51cc03234da6bf",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${n}`;return console.log(e),fetch(e).then(t=>t.json()).catch(t=>{})}let i;function f(s){const o=document.getElementById("gallery");o.innerHTML=s.map(r=>`
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
    `).join(""),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const p=document.getElementById("search-form"),g=document.getElementById("search-input"),d=document.getElementById("loader");let c;p.addEventListener("submit",s=>{if(s.preventDefault(),d.style.display="block",c=g.value.trim(),c===""){l.error({title:"Error",message:"Search query cannot be empty!"});return}});u(c).then(s=>{s.hits.length===0?l.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"}):f(images)}).catch(s=>{l.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{d.style.display="none",refs.searchForm.reset()});
//# sourceMappingURL=commonHelpers.js.map
