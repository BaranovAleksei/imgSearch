parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.getElementById("sendForm"),n=document.getElementById("gallery"),t=document.querySelector(".gallery");function a(){document.getElementById("gallery").innerHTML="";var e=document.createElement("span");e.innerHTML="фото не найденo, попробуйте изменить запрос",e.className="notPhoto",n.appendChild(e)}function r(e,n){return fetch(n,{method:e,headers:{Authorization:"Client-ID -dkXdY0X4XMvtNfqESKQXwy3ItkXWHCkVeb-T1EAX_Y","Content-Type":"application/json;charset=utf-8"}}).then(function(e){return e.json()})}function c(e){document.getElementById("gallery").innerHTML="";var t=[];return e.map(function(e){var a={classNameDiv:"divSearchClass",src:e.urls.thumb,classNameImg:"imgSearch",openUrlImg:e.urls.small};d=document.createElement("div"),d.className=a.classNameDiv,d.addEventListener("click",function(e){e.preventDefault(),l(a.openUrlImg)}),n.appendChild(d);var r=new Image;r.src=a.src,r.className=a.classNameImg,d.appendChild(r),t.push(a)}),t}function l(e){var n=document.createElement("div");n.className="fullImg",n.addEventListener("click",function(e){e.preventDefault(),n.remove()});var t=new Image;t.src=e,n.appendChild(t),document.body.appendChild(n)}e.addEventListener("submit",function(e){e.preventDefault();var n=document.getElementById("searchNameImg").value,t="https://api.unsplash.com/search/photos?per_page=10&page=1&query=".concat(n);document.getElementById("searchNameImg").value="",r("GET",t).then(function(e){0!==e.total?c(e.results):a()}).then(function(e){return console.log(e)})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=https://baranovaleksei.github.io/imgSearch/main.bc750912.js.map