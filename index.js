let main_imge=document.getElementById('main_imge');
let imgs =document.querySelectorAll('.imgs');
for(let i=0;i<imgs.length;i++){
    imgs[i].onmouseover=()=>{
        main_imge.src=imgs[i].src;
    }
}

