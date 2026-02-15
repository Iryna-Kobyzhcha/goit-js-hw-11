import{a as d,S as f,i as n}from"./assets/vendor-MHonsUl1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const p="https://pixabay.com/api/",h="54665411-360ba93f793399be536ad6b7c";function m(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:r}).then(e=>e.data).catch(e=>{throw console.error("Помилка запиту до Pixabay:",e),e})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),m(r).then(e=>{if(c(),e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits),n.success({message:`Found ${e.hits.length} images for "${r}"`,position:"topRight"})}).catch(e=>{c(),n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)})});
//# sourceMappingURL=index.js.map
