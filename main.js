(()=>{"use strict";const e=document.querySelector("#image-input"),t=document.querySelector("input#text"),n=document.querySelector("input#text-size"),r=document.querySelector("input#text-color"),i=document.querySelector("input#text-offset"),o=document.querySelector("input#frame-color"),u=document.getElementById("style-variables"),c=(document.getElementById("#frameText"),document.getElementById("back-img")),d=document.getElementById("front-img");function a(){u.innerHTML=`:root {\n     --frame-color: ${o.value} !important; \n     --text-color: ${r.value} !important;\n     --text-size: ${n.value}px !important;\n    }`}function m(){const e=t.value;document.querySelector("#frameText").innerHTML=e}e.addEventListener("change",(function(){const e=this.files[0];if(this.files){const t=new FileReader;t.addEventListener("load",(function(){c.innerHTML=`<img id="img-back" src="${t.result}"/>`,d.innerHTML=`<img id="img-front" src="${t.result}"/>`})),t.readAsDataURL(e)}})),t.addEventListener("input",m),i.addEventListener("input",(function(){const e=i.value;document.querySelector("#frameText").setAttribute("startOffset",`${e}%`)})),r.addEventListener("input",a),n.addEventListener("input",a),o.addEventListener("input",a),m()})();