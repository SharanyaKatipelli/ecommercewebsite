window.onscroll=function(){myFunction()};

var navBar=document.getElementById('navbar');
var sticky=navBar.offsetTop;
function myFunction(){
    if(window.pageYOffset >= sticky){
        navBar.classList.add("sticky");
    }
    else{
        navBar.classList.remove("sticky");

    }
}
let menu=document.querySelector('#menuBar');
let navbar=document.querySelector('.navmenu');
menu.onclick=() =>{
    navbar.classList.toggle('open');
}