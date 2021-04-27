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


//animation obiects
//main / home page

gsap.from('.project-name', {
    y: 20,
    ease: 'none',
    duration: 0.3,
    opacity: 0,
    delay: 0.7,
});
gsap.from('.project-description', {
    y: 100,
    ease: 'none',
    duration: 0.2,
    opacity: 0,
    delay: 0.9,
});

//Project description

gsap.from('.project-second-name', {
    scrollTrigger: {
        trigger: ".project-description-section",
        scrub: false,
        start: "top center",
    },
    ease: 'none',
    y: 30,
    opacity: 0,
    duration: 0.4,
});

gsap.from('.paragraph-of-descripn', {
    scrollTrigger: {
        trigger: ".project-description-section",
        scrub: false,
        start: "top center",
    },
    ease: 'none',
    y: 30,
    opacity: 0,
    duration: 0.6,
});

gsap.from('.button-box--item', {
    scrollTrigger: {
        trigger: ".project-second-name",
        scrub: false,
        start: "top center",
    },
    ease: 'none',
    opacity: 0,
    height: 0,
    transformOrigin: "top center",
    duration: 0.2,
});

//AUTHOR DESCRIPION 

gsap.from('.info-intro', {
    scrollTrigger: {
        trigger: ".author-description",
        scrub: false,
        start: "top center",
    },
    ease: 'in',
    opacity: 0,
    x: -30,
    duration: 0.3,
});

gsap.from('.info-content', {
    scrollTrigger: {
        trigger: ".author-description",
        scrub: false,
        start: "top center",
    },
    ease: 'in',
    opacity: 0,
    x: -30,
    duration: 0.6,
});

//COLORS SECTION
gsap.from('.color-circle', {
    scrollTrigger: {
        trigger: ".color-section",
        scrub: false,
        start: "top center",
    },
    ease: 'in',
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
});

//DESIGN SECTION

gsap.from('.design-section-name', {
    scrollTrigger: {
        trigger: ".design-section",
        scrub: false,
        start: "top center",
    },
    ease: 'none',
    transformOrigin: "bottom center",
    y: -20,
    height: 0,
    opacity: 0,
    duration: 0.3,
});

gsap.from('.design-img-box', {
    scrollTrigger: {
        trigger: ".design-section",
        scrub: false,
        start: "top center",
    },
    ease: 'none',
    y: -20,
    opacity: 0,
    duration: 0.8,
});


