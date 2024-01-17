const t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",i=>{if(!i.target.classList.contains("wall"))return;let l=t.clientWidth-e.clientWidth,n=t.clientHeight-e.clientHeight,c=i.offsetX-e.clientWidth/2,a=i.offsetY-e.clientHeight/2;c=Math.max(0,Math.min(c,n)),a=Math.max(0,Math.min(a,l)),e.style.left=`${c}px`,e.style.top=`${a}px`});//# sourceMappingURL=index.02cdb8d4.js.map

//# sourceMappingURL=index.02cdb8d4.js.map
