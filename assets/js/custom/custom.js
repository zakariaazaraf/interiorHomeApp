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
        header.firstElementChild.style.padding = ".5rem 0";
    }else{  
        header.classList.remove('bg-scroll')
        header.firstElementChild.style.padding = "1rem 0";
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
const project = document.querySelectorAll('.projects .project')
let activeCircle = document.querySelector('.circles .circle.active').dataset.id
console.log(activeCircle)
let pushWidth = 4;

circlesContainer.addEventListener('click', (e) =>{

    if(e.target.hasAttribute('data-id')){
        circles.forEach(circle => {
            circle.classList.remove('active');
        })

        e.target.classList.add('active')

        if(e.target.dataset.id <= activeCircle){

            projectsContainer.style.transform = 
                "translateX("+ ((4 - e.target.dataset.id) * project[e.target.dataset.id - 1].clientWidth )  +"px)";
                
                pushWidth = e.target.dataset.id;
                console.log('Less',pushWidth )
        }else if(e.target.dataset.id > pushWidth){

            projectsContainer.style.transform = 
                "translateX(-"+ ((e.target.dataset.id - pushWidth) * project[e.target.dataset.id - 1].clientWidth )  +"px)";
                console.log('graeter')
                activeCircle = e.target.dataset.id
            
        }   
    } 
    // GET THE ID OF THE ACTIVE CIRCLE
    //activeCircle = e.target.dataset.id
    
})

