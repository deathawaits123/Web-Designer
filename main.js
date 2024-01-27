// Header On Scroll Change BackGround

let header = document.querySelector('header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
    // // Remove class active from menu on scroll
    // btnMenu.classList.remove('fa-times');
    // NavLinks.classList.remove('active')
}


// Menu on Click open
let btnMenu = document.getElementById('btn-menu');
let NavLinks = document.querySelector('.links');

btnMenu.onclick = function (){
    btnMenu.classList.toggle('fa-times');
    NavLinks.classList.toggle('active')
}

  // add class active to link in menu by scroll

  let link = document.querySelectorAll('.links li');
  let sec = document.querySelectorAll('.sec-menu');

  function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 50 < sec [len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active")
  }
  window.addEventListener("scroll",activeMenu)
