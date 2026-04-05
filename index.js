import{a as v,S,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",q="55293382-56d7845179b77e1ce3559f450";async function h(t,o=1){return(await v.get(P,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const d=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more"),C=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(t){const o=t.map(({webformatURL:s,tags:a,largeImageURL:e,likes:r,views:n,comments:b,downloads:w})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${a}"
          />
        </a>
        <ul class="title-text">
  <li>
    <h2>Likes</h2>
    <p>${r}</p>
  </li>
  <li>
    <h2>Views</h2>
    <p>${n}</p>
  </li>
  <li>
    <h2>Comments</h2>
    <p>${b}</p>
  </li>
  <li>
    <h2>Downloads</h2>
    <p>${w}</p>
  </li>
</ul>
      </li>`).join("");d.insertAdjacentHTML("beforeend",o),C.refresh()}function M(){d.innerHTML=""}function p(){g.classList.add("is-visible")}function y(){g.classList.remove("is-visible")}function $(){m.classList.add("is-visible")}function c(){m.classList.remove("is-visible")}function x(){const t=d.querySelector(".gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}const B=document.querySelector(".form"),O=document.querySelector(".load-more");let u="",i=1;const L=15;B.addEventListener("submit",R);O.addEventListener("click",A);async function R(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(o){u=o,i=1,M(),c(),p();try{const s=await h(u,i);if(s.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}f(s.hits),i+=1;const a=Math.ceil(s.totalHits/L);i>a?c():$()}catch{l.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{y()}}}async function A(){p();try{const t=await h(u,i);if(t.hits.length===0){c(),l.error({position:"topRight",message:"We're sorry, there are no more images to load",messageColor:"white",backgroundColor:"red"});return}f(t.hits),x(),i+=1;const o=Math.ceil(t.totalHits/L);i>o&&c()}catch{l.show({message:"An error occurred while loading more images. Please try again.",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
