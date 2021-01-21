/* Create Your Javascript Code */
const header = document.querySelector('header')
const menu = document.querySelector('header nav .nav-menu')
const showMenu = document.querySelector('header .show-menu')
const closeMenu = document.querySelector('header .close-menu')


// SHOW THE MENU 
showMenu.addEventListener('click', ()=>{
    menu.style.transform = "translateX("+ 0 +"%)";
})

// HIDE THE MENU
closeMenu.addEventListener('click', ()=>{
    menu.style.transform = "translateX("+ 100 +"%)";
})

document.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 100){
        header.classList.add('bg-scroll')
    }else{  
        header.classList.remove('bg-scroll')
    }
})