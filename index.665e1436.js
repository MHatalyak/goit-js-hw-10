var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequireabb0;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequireabb0=n);var d=n("9dxg1");document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("breed_selector"),t=document.querySelector(".loader"),o=document.querySelector(".cat-info"),n=document.querySelector(".error");e.addEventListener("change",(function(){const e=this.value;(0,d.showBreedInfo)(e)})),t.classList.add("show"),t.classList.remove("hide"),o.classList.add("hide"),n.classList.add("hide"),(0,d.fetchBreeds)().then((function(){t.classList.remove("show"),t.classList.add("hide"),o.classList.remove("hide")})).catch(d.handleError)}));
//# sourceMappingURL=index.665e1436.js.map
