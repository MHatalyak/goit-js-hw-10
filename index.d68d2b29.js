var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequireabb0;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequireabb0=o),o.register("9dxg1",(function(e,t){var n,o,r,i;n=e.exports,o="showBreedInfo",r=function(){return d},Object.defineProperty(n,o,{get:r,set:i,enumerable:!0,configurable:!0});let l=[];function d(e){const t=l[e];document.getElementById("breed_image").src=t.image.url,document.getElementById("breed_name").textContent=t.name,document.getElementById("breed_description").textContent=t.description,document.getElementById("breed_temperament").textContent=t.temperament}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_EAPyDMjbUgKcfFUEpx7puTLp6nL8ysyeHlaXs7Dve77C0mnckEp2aPwOnY3nZbFL"}}).then((e=>e.json())).then((e=>{e=e.filter((e=>{var t;return null!=(null===(t=e.image)||void 0===t?void 0:t.url)})),l=e;const t=document.getElementById("breed_selector");for(let e=0;e<l.length;e++){const n=l[e];let o=document.createElement("option");n.image&&(o.value=e,o.innerHTML=`${n.name}`,t.appendChild(o))}d(0)})).catch((function(e){console.log(e)}))})),o("9dxg1");
//# sourceMappingURL=index.d68d2b29.js.map
