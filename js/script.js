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
});



