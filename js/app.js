
// Selectors
const toggle = document.querySelector('.toggle');
const close = document.querySelector('#close');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.nav');
const featureCards = document.querySelectorAll('.feature-card');
const aboutCols = document.querySelectorAll('.about-col');
const testCols = document.querySelectorAll('.test-col');


// Responsive navbar
toggle.addEventListener('click', () => {
    navLinks.classList.add('show');
    close.addEventListener('click', () => {
        navLinks.classList.remove('show');
    } );
} );

// Scroll animations

window.addEventListener('scroll',() => {
    let scrollYvalue = window.scrollY;

    if(scrollYvalue > 300) {
        nav.classList.add('fix');
    }
    else {
        nav.classList.remove('fix');
    }
    

    if(scrollYvalue > 600) {
        featureCards.forEach(card => {
            card.classList.add('animate');
        } )
    }
  

    if(scrollYvalue > 1600) {
     aboutCols.forEach(aboutCol => {aboutCol.classList.add('animate')} );
    }

    if(scrollYvalue > 2100) {
     testCols.forEach(testCol => {testCol.classList.add('animate')} );
    }

 
});