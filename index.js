console.log("test.");
//test ^^^


//Variables

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation-menu');
const colorIn1 = document.querySelector('.color-in1');
const colorIn2 = document.querySelector('.color-in2');
const colorIn3 = document.querySelector('.color-in3');
const hamburgerLine1 = document.querySelector('.hamburger-menu__line');
const navigationItem1 = document.querySelector('.item1');
const navigationItem2 = document.querySelector('.item2');
const navigationItem3 = document.querySelector('.item3');
const navigationItem4 = document.querySelector('.item4');

const geometryOneItem = document.querySelectorAll('.geometry-one--item');
const geometryTwoItem = document.querySelectorAll('.geometry-two--item');
const geometryThreeItem = document.querySelectorAll('.geometry-three--item');

const geometryOne = document.querySelector('.geometry-one');
const geometryTwo = document.querySelector('.geometry-two');
const geometryThree = document.querySelector('.geometry-three');

const welcomeText = document.querySelector('.header-box');
const logo = document.querySelector('.logo');

const arrowBox = document.querySelector('.arrow-box');

var nav = ["1", "2", "3", "4"];
const a = "navigationItem";



//Function open/close navigation menu 

const handleClick = () => {
    navigationMenu.classList.toggle("navigation-menu--active");  
    console.log("clicked");
    colorIn1.classList.toggle("color-in1--active");
    colorIn2.classList.toggle("color-in2--active");
    colorIn3.classList.toggle("color-in3--active");
    hamburgerLine1.classList.toggle("hamburger-menu__line--active");
    hamburgerMenu.classList.toggle("hamburger-menu--active");
    
    //using less code by using for lope
    for(const element of nav) {
        const i = a + element;
        console.log(i);
        eval(a + element).classList.toggle("item--active");
    }

    hamburgerMenu.disabled = true;
    setTimeout(function() { hamburgerMenu.disabled = false;}, 2400);
    

};

//Function close navigation menu if you click an item of list 

const handleClick2 = () => {
    navigationMenu.classList.remove("navigation-menu--active");
    colorIn1.classList.remove("color-in1--active");
    colorIn2.classList.remove("color-in2--active");
    colorIn3.classList.remove("color-in3--active");
    hamburgerLine1.classList.remove("hamburger-menu__line--active");
    hamburgerMenu.classList.remove("hamburger-menu--active");

    //using less code by using for lope
    for(const element of nav) {
        const i = a + element;
        console.log(i);
        
        eval(a + element).classList.remove("item--active");
    }

    hamburgerMenu.disabled = true;
    setTimeout(function() { hamburgerMenu.disabled = false;}, 2400);
}


//add event click to items of list 
for(const elements of nav) {
    const i = a + elements;
    console.log(i);
    // console.log(eval(a + element));
    eval(a + elements).addEventListener("click", handleClick2);
}

//add event click to hamburger menu button
hamburgerMenu.addEventListener("click", handleClick);

TweenMax.set(geometryOneItem, {visibility: "visible" });
TweenMax.set(geometryTwoItem, {visibility: "visible" });
TweenMax.set(geometryThreeItem, {visibility: "visible" });


TweenMax.from(
    geometryOneItem,
    1,
    {x: 0, y: 0, opacity: 0, delay: 4,}
);
TweenMax.from(
    geometryTwoItem,
    1,
    {x: 0, y: 0, opacity: 0, delay: 5,}
);
TweenMax.from(
    geometryThreeItem,
    1,
    {x: 0, y: 0, opacity: 0, delay: 6,}
);


TweenMax.from(logo, 1, {opacity: 0, delay: 3.5,});
TweenMax.from(hamburgerMenu, 1, {opacity: 0, delay: 3.5,});

TweenMax.from(welcomeText, 0.5, {
    opacity: 0, x: 300, delay: 3.5,
});
TweenMax.from(arrowBox, 1, {opacity: 0, delay: 4,});



//cursor follow animation
window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
        
    geometryOne.style.top = -(y * 0.05) + 'px';
    geometryOne.style.left = -(x * 0.05) + 'px';

    geometryTwo.style.top =  (y * 0.05) + 'px';
    geometryTwo.style.left = (x * 0.05) + 'px';
    
    geometryThree.style.top = (y * 0.05) + 'px';
    geometryThree.style.left = (x* 0.05) + 'px';
};


const qc1 = document.querySelector(".q-c1");
const qc2 = document.querySelector(".q-c2");
const outBox = document.querySelector(".out-box");

//quota animations 1
gsap.to(qc1, {
    scrollTrigger: {
      trigger: ".quotation-section",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    x: 70,
    ease: "none"
});

gsap.to(qc2, {
    scrollTrigger: {
      trigger: ".quotation-section",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    x:-70,
    ease: "none"
});

gsap.to(outBox, {
    scrollTrigger: {
      trigger: ".quotation-section",
      scrub: true,
      start: "center bottom",
      end: "top top"
    },
    transformOrigin: "left center",
    height: 0,
    ease: "none",
    
});



//quota animations 2
const qc11 = document.querySelector('.q-c1-1');
const qc22 = document.querySelector('.q-c2-2');
const outBox2 = document.querySelector('.out-box-2');

gsap.to(qc11, {
    scrollTrigger: {
      trigger: ".quotation-section2",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    x: 70,
    ease: "none"
});

gsap.to(qc22, {
    scrollTrigger: {
      trigger: ".quotation-section2",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    x:-70,
    ease: "none"
});

gsap.to(outBox2, {
    scrollTrigger: {
      trigger: ".quotation-section2",
      scrub: true,
      start: "center bottom",
      end: "center center"
    },
    transformOrigin: "left center",
    width: 0,
    height: 0,
    ease: "none",
    
});




//mouse scroll effect
gsap.to('.mouse', {
    scrollTrigger: {
        trigger: ".header-box",
        scrub: true,
        start: "top top",
        end: "+=500",
    },
    y: 110,
    height: 100,
    ease: 'none',
});


//mouse-text scroll effect
gsap.to('.text', {
    scrollTrigger: {
        trigger: ".header-box",
        scrub: true,
        start: "top top",
        end: "+=100",
    },
    y: 10,
    opacity: 0,
    ease: 'none',
});


//project scroll effect 
gsap.to('.p-span1', {
    scrollTrigger: {
        trigger: ".floor1",
        scrub: false,
        start: "top center",
    },
    x: 800,
    width: 0,
    ease: 'none',
    duration: 0.9,
});

gsap.to('.p-span2', {
    scrollTrigger: {
        trigger: ".floor1",
        scrub: false,
        start: "bottom center",
    },
    x: -800,
    width: 0,
    ease: 'none',
    duration: 0.9,
});


gsap.from('.project-name', {
    scrollTrigger: {
        trigger: ".floor1",
        scrub: false,
        start: "top center",
        
    }, 
    y: 100,
    ease: 'none',
    opacity: 0,
    duration: 0.4,

});
gsap.from('.p-coment', {
    scrollTrigger: {
        trigger: ".floor1",
        scrub: false,
        start: "top center",
        
    }, 
    y: 130,
    ease: 'none',
    opacity: 0,
    duration: 0.5,

});
gsap.from('.project-btn', {
    scrollTrigger: {
        trigger: ".floor1",
        scrub: false,
        start: "top center",
        
    }, 
    y: 130,
    ease: 'none',
    opacity: 0,
    duration: 0.6,

});

//////////////////////////////
//animation intro to projects

// gsap.to('.animated-words', {
//     scrollTrigger: {
//         trigger: ".section-name",
//         scrub: true,
//         start: "top bottom",
//         end: "top center",
//         scrub: 0.2,
//     },
//     opacity: 1,
//     x: 0,
//     transformOrigin: "left center", 
//     ease: 'none',
    
// });

// gsap.to('.animated-words2', {
//     scrollTrigger: {
//         trigger: ".section-name",
//         scrub: true,
//         start: "top bottom",
//         end: "top center",
//         scrub: 0.2,
//     },
//     x: -1000,
//     opacity: 1,
//     transformOrigin: "left center", 
//     ease: 'none',
    
// });



//animation secion on scroll.
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-3, 3);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(
          proxy, {
          skew: 0,
         duration: 0.8,
          ease: "power3",
           overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});



gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});


//funcion needed to set delay of next page :)

//href="javascript:delay('URL')"
function delay (URL) {
    setTimeout( function() { window.location = URL }, 2200 );
}
function delay2 (URL) {
    setTimeout( function() { window.location = URL }, 3300 );
}


///
// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
// });



//ABOUT box ANIMATION GSAP
//left box
gsap.from(".about-box", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: true,
      start: "top bottom",
      end: "top top",
      scrub: 0.5,
    },
    y: -130,
    
    ease: "none"
});

//right box
gsap.from(".contact-box", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: true,
      start: "top bottom",
      end: "top top",
      scrub: 0.5,
    },
    y: 130,
    
    ease: "none"
});

//items inside boxes

gsap.from(".i-n", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: false,
      start: "top center",      
    },
    
    opacity: 0,
    ease: "none"
});
gsap.from(".i-d", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: false,
      start: "top center",
      
      
    },
    
    opacity: 0,
    ease: "none"
});
gsap.from(".a-c-b", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: false,
      start: "top center",
      
    },
    opacity: 0,
    ease: "none",
    
});

gsap.from(".img-box1", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: false,
      start: "top center",
      
    },
    opacity: 0,
    ease: "none",
    
});
gsap.from(".intro-btn", {
    scrollTrigger: {
      trigger: ".about-section",
      scrub: false,
      start: "top center",
      
    },
    opacity: 0,
    ease: "none",
    
});



//add event listener to button and animations with lines.

const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const l5 = document.querySelector('.l5');
const l6 = document.querySelector('.l6');

const tr1 = document.querySelector('.tr1');
const tr2 = document.querySelector('.tr2');
const tr3 = document.querySelector('.tr3');
const tr4 = document.querySelector('.tr4');

const turnLines = () => {
    l1.classList.add('l1--active');
    l2.classList.add('l2--active');
    l3.classList.add('l3--active');
    l4.classList.add('l4--active');
    l5.classList.add('l5--active');
    l6.classList.add('l6--active');
    console.log("testclick2");

    tr1.classList.add('tr1--active');
    tr2.classList.add('tr2--active');
    tr3.classList.add('tr3--active');
    tr4.classList.add('tr4--active');

}

const turnLineBtn = document.querySelector('.content-btn-come');

turnLineBtn.addEventListener("click", turnLines);





gsap.from(".line-in-1", {
    scrollTrigger: {
      trigger: ".enter-animation",
      scrub: false,
      start: "top center",
      
    },
    transformOrigin: 'top center',
    height: 0,
    duration: 2,
    ease: "none",
});

gsap.from(".line-in-2", {
    scrollTrigger: {
      trigger: ".enter-animation",
      scrub: false,
      start: "top center",
      
    },
    width: 0,
    duration: 2,
    delay: 2,
    ease: "none",
});

gsap.from(".ca", {
    scrollTrigger: {
      trigger: ".enter-animation",
      scrub: false,
      start: "top center",
      
    },
    opacity: 0,
    duration: .7,
    ease: "none",
});



function delay3 (URL) {
    setTimeout( function() { window.location = URL }, 1760 );
}

const animationInOut = document.querySelector('.animation-in-out');
const btnReadMore = document.querySelector('.intro-btn');
const btnProject1 = document.querySelector('.project-btn');
const btnProject2 = document.querySelector('.project-btn-2');

const animationPageChange = () => {
    
    animationInOut.classList.toggle('animation-in-out--active');
}

btnReadMore.addEventListener('click', animationPageChange);
btnProject1.addEventListener('click', animationPageChange);
btnProject2.addEventListener('click', animationPageChange);




/* 
#####################################
######AAAA#################AAAA######
#####AmmmmAA#############AAmmmmA#####
###AAmmmmmmmAAA#######AAAmmmmmmmAA###
##AmmmmmmmmmmmmAA###AAmmmmmmmmmmmmA##
##AmmmmmmBBBmmmmmAAAmmmmmBBBmmmmmmA##
##AmmmmmmA##BBBmmmmmmmBBB##BmmmmmmA##
##AmmmmmmA#####BBmmmBB#####BmmmmmmA##
##AmmmmmmA#######BBB#######BmmmmmmA##
##AmmmmmmA#################BmmmmmmA##
##AmmmmmmA#################BmmmmmmA##
##AmmmmmmA#################BmmmmmmA##
##AmmmmmmA#################BmmmmmmA##
##AmmmmAAA#################BBBmmmmA##
##AmAAA#######################BBBmR##
##AA#############################BR##
#####################################

*/
console.log('Designed and developed by Bartlomiej Mach');
console.log('#########################################');
console.log('#########################################');
console.log('########AAAA#################AAAA########');
console.log('#######AmmmmmAA#############AAmmmmA######');
console.log('#####AAmmmmmmmAAA#######AAAmmmmmmmAA#####');
console.log('####AmmmmmmmmmmmmAA###AAmmmmmmmmmmmmA####');
console.log('####AmmmmmmBBBmmmmmAAAmmmmmBBBmmmmmmA####');
console.log('####AmmmmmmA##BBBmmmmmmmBBB##BmmmmmmA####');
console.log('####AmmmmmmA#####BBmmmBB#####BmmmmmmA####');
console.log('####AmmmmmmA#######BBB#######BmmmmmmA####');
console.log('####AmmmmmmA#################BmmmmmmA####');
console.log('####AmmmmmmA#################BmmmmmmA####');
console.log('####AmmmmmmA#################BmmmmmmA####');
console.log('####AmmmmmmA#################BmmmmmmA####');
console.log('####AmmmmAAA#################BBBmmmmA####');
console.log('####AmAAA#######################BBBmR####');
console.log('####AA#############################AA####');
console.log('#########################################');


