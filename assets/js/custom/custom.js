/* Create Your Javascript Code */
const header = document.querySelector('header')
const menu = document.querySelector('header nav .nav-menu')
const showMenu = document.querySelector('header .show-menu')
const closeMenu = document.querySelector('header .close-menu')

window.addEventListener('load', (e)=>{
    if(window.innerWidth >= 992){
        menu.classList.remove('sided-menu')
        closeMenu.style.display = 'none'
        showMenu.style.display = 'none'
        menu.style.transform = "translateX("+ 0 +"%)";
        
    }else{  
        menu.classList.add('sided-menu')
        closeMenu.style.display = 'inline-block'
        showMenu.style.display = 'inline-block'
        menu.style.transform = "translateX("+ 100 +"%)";
        
    }

    if(window.pageYOffset > 100){
        header.classList.add('bg-scroll')
    }else{  
        header.classList.remove('bg-scroll')
    }
    
})


// SHOW THE MENU 
showMenu.addEventListener('click', ()=>{
    menu.style.transition = "all .4s ease";
    menu.style.transform = "translateX("+ 0 +"%)";
})

// HIDE THE MENU
closeMenu.addEventListener('click', ()=>{
    menu.style.transition = "all .4s ease";
    menu.style.transform = "translateX("+ 100 +"%)";
})

document.addEventListener('scroll', (e) => {
    
    if(window.pageYOffset > 100){
        header.classList.add('bg-scroll')
        header.firstElementChild.style.padding = ".8rem 0";
    }else{  
        header.classList.remove('bg-scroll')
        header.firstElementChild.style.padding = "1.7rem 0";
    }
})

window.addEventListener('resize', (e) => {
    menu.style.transition = "none";
    if(e.target.innerWidth >= 992){
        menu.classList.remove('sided-menu')
        closeMenu.style.display = 'none'
        showMenu.style.display = 'none'
        menu.style.transform = "translateX("+ 0 +"%)";
        
    }else{  
        menu.classList.add('sided-menu')
        closeMenu.style.display = 'inline-block'
        showMenu.style.display = 'inline-block'
        menu.style.transform = "translateX("+ 100 +"%)";
        
    }  
})

// START THE PORTFOLIO SWAP FONCTUNALITY
const projectsContainer = document.querySelector('.portfolio-section .projects')
const circlesContainer = document.querySelector('.circles')
const circles = document.querySelectorAll('.circles .circle')

console.log(projectsContainer)
console.log(circles)

circlesContainer.addEventListener('click', (e) =>{
    console.log(e.target)
})

/* circles.forEach(circle => {
    circle.addEventListner('click', (e) =>{
        e.target.classList.add('active')
    })
}) */