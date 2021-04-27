console.log("test.");
//test ^^^




//funcion needed to set delay of next page :)

//href="javascript:delay('URL')"
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1760 );
}

//VARIABLES
const animationInOut = document.querySelector('.animation-in-out');
const button1 = document.querySelector('.back-button');
const button2 = document.querySelector('.hamburger-menu');
const button3 = document.querySelector('.logo-img');

//ANIMTION IN AFTER PAGE CHANGE

TweenMax.from(
    animationInOut,
    0.5,
    {y: '-300vh',}
);

//CHANGE PAGE ANIMATIONS

const aniamtion1 = () => {
    
    animationInOut.classList.toggle('animation-in-out--active');
}

button1.addEventListener('click', aniamtion1);
button2.addEventListener('click', aniamtion1);
button3.addEventListener('click', aniamtion1);