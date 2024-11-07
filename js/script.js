const icon = document.getElementById('icon_mobile');
const menu = document.getElementById('menu_mobile');
const nav = document.getElementById('piramide_img');
window.addEventListener('wheel', function(event) {
    let currentScroll = window.scrollY;
    if (currentScroll < 15) {
      event.preventDefault(); 
      let scrollAmount = event.deltaY * 0.1;
      let newScroll = currentScroll + scrollAmount;
      window.scrollTo({
        top: newScroll,  
        behavior: 'smooth'
      });
    }
  }, { passive: false });


/*** Await ***/
const awaitElements = document.querySelectorAll('.await');

function applyToAllAwaitElements(callback) {
    awaitElements.forEach(callback);
}

window.addEventListener("scroll", function() {
    nav.classList.toggle('sticky', window.scrollY > 0);
    applyToAllAwaitElements(element => {
        if (window.scrollY == 0) {
            element.style.opacity = 0;
        } else {
            element.style.opacity= 1;
        }
    });
    if(menu.style.opacity == '0'){
      menu.classList.toggle('menu_animation', window.scrollY > 0)
      icon.classList.toggle('icon_animation', window.scrollY > 0)
    }
});
/** Menu **/


icon.onclick = () =>{
   menu.classList.toggle('menu_animation')
   icon.classList.toggle('icon_animation')
}
/**********  Transição suave das paginas ******************/
// Seleciona todos os links que devem ter a transição suave
const smoothLinks = document.querySelectorAll('a');

smoothLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      if(!link.classList.contains('blank')){
        event.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            window.location.href = this.href; 
        }, 2200); 
      }
        
    });
});


