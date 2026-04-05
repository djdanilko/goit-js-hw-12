import{a as C,S,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",P="55293382-56d7845179b77e1ce3559f450";async function d(o,t=1){return(await C.get(q,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function f(o){const t=o.map(({webformatURL:s,tags:a,largeImageURL:e,likes:r,views:l,comments:w,downloads:v})=>`<li class="gallery-item">
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
    <p>${l}</p>
  </li>
  <li>
    <h2>Comments</h2>
    <p>${w}</p>
  </li>
  <li>
    <h2>Downloads</h2>
    <p>${v}</p>
  </li>
</ul>
      </li>`).join("");h.insertAdjacentHTML("beforeend",t),M.refresh()}function R(){h.innerHTML=""}function y(){g.classList.add("is-visible")}function p(){g.classList.remove("is-visible")}function b(){m.classList.add("is-visible")}function c(){m.classList.remove("is-visible")}function $(){const t=document.querySelector(".gallery").querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}const k=document.querySelector(".form"),x=document.querySelector(".load-more");let u="",i=1;const L=15;k.addEventListener("submit",B);x.addEventListener("click",O);async function B(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(t){u=t,i=1,R(),c(),y();try{const s=await d(u,i);if(s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}f(s.hits),i+=1;const a=Math.ceil(s.totalHits/L);i>a?(c(),n.info({position:"topRight",message:"We're sorry, but you have reached the end of search results.",messageColor:"white",backgroundColor:"blue"})):b()}catch{n.show({message:"We are sorry, but you have reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{p()}}}async function O(){y(),c();try{const o=await d(u,i);if(o.hits.length===0){c(),n.info({position:"topRight",message:"We're sorry, there are no more images to load",messageColor:"white",backgroundColor:"red"});return}f(o.hits),$(),i+=1;const t=Math.ceil(o.totalHits/L);i>t?(c(),n.info({position:"topRight",message:"We're sorry, but you have reached the end of search results.",messageColor:"white",backgroundColor:"blue"})):b()}catch{n.show({message:"An error occurred while loading more images. Please try again.",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{p()}}
//# sourceMappingURL=index.js.map
