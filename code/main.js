//SCROLLTRIGGER - HERO 

const tlhero = gsap.timeline({delay: 0.15});
tlhero.from('.bags-image', {
    y: -300,
    opacity: 0,
    duration: 3,
    ease: "expo.inOut",
});

const tlheader = gsap.timeline({delay: 0.5});
tlheader.from('.text h1', {
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "expo.inOut",
});

gsap.set(".bags-image", {yPercent: 5});
gsap.set(".bb-image", {yPercent: -5});
gsap.set(".bf-image", {yPercent: -3});

gsap.to(".bags-image", {
    yPercent: -5,
    ease: "none",
    scrollTrigger:{
        trigger: ".screen",
        start: "top center",
        scrub: 1,
    },
});

gsap.to(".bb-image", {
    yPercent: 5,
    ease: "none",
    scrollTrigger:{
        trigger: ".screen",
        start: "top center",
        scrub: 1,
    },
});

gsap.to(".bf-image", {
    yPercent: 5,
    ease: "none",
    scrollTrigger:{
        trigger: ".screen",
        start: "top center",
        scrub: 1,
    },
});
//SCROLLTRIGGER - ABOUT

const tlabout = gsap.timeline({
    scrollTrigger:{
        trigger: '.row',
        delay: 1,
        start: "+=-300px",
        end: "+=300px",
        scrub: 2,
    }
});

tlabout.from(".text-left", {
    x:-200,
    opacity: 0,
    duration: 3,
});

tlabout.from(".icons div",{
    y:-100,
    opacity: 0,
    duration: 4, 
    stagger: 0.8,
});

tlabout.from(".hip",{
    x:45,
    opacity: 0,
    duration: 3, 
});

//SCROLLTRIGGER - OUR COFFEE

{
const tlsteps = gsap.timeline({
    scrollTrigger:{
        trigger: '#OurCoffee',
        pin: true,
        scrub: true,
    }
});

tlsteps.from(".one", {
    opacity: 0.2,
    duration: 1,
});
tlsteps.to(".one", {
    opacity: 0.2,
    duration: 1,
});

tlsteps.from(".two", {
    opacity: 0.2,
    duration: 1,
});

tlsteps.to(".two", {
    opacity: 0.2,
    duration: 1,
});

tlsteps.from(".three", {
    opacity: 0.2,
    duration: 1,
});
tlsteps.to(".three", {
    opacity: 0.2,
    duration: 1,
});

tlsteps.from(".four",{
    opacity: 0.2,
    duration: 1,
});
tlsteps.to(".four",{
    opacity: 0.2,
    duration: 1,
});

tlsteps.from(".five",{
    opacity: 0.2,
    duration: 2,
});
tlsteps.from(".five",{
    opacity: 0.2,
    duration: 1,
});
}

  //NAV BAR
  const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click', ()=> {
        //Burger Animation
        burger.classList.toggle('toggle');
        
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        if( burger.classList.contains('toggle') ){
            gsap.from('.nav-links li', {x: 50, opacity: 0, duration: 0.3, stagger: 0.2});
        }   
    });
};

navSlide();


//PARALLAX MOUSEMOVE HERO
{
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);
}

//AUDIO 

    // ICON ONE
    let iconOne = document.querySelector('.Roast');
    let audioOne = document.getElementById('audioOne');
    // add event listener 
    iconOne.addEventListener('mouseenter', () => {
        audioOne.play();
    });
    iconOne.addEventListener('mouseleave', () => {
        audioOne.pause();
    });


    // ICON TWO
    let iconTwo = document.querySelector('.Origin');
    let audioTwo = document.getElementById('audioTwo');
    // add event listener 
    iconTwo.addEventListener('mouseenter', () => {
        audioTwo.play();
    });
    iconTwo.addEventListener('mouseleave', () => {
        audioTwo.pause();
    });


    // ICON THREE
    let iconThree = document.querySelector('.Source');
    let audioThree = document.getElementById('audioThree');
    // add event listener 
    iconThree.addEventListener('mouseenter', () => {
        audioThree.play();
    });
    iconThree.addEventListener('mouseleave', () => {
        audioThree.pause();
    });


// IMAGE SLIDER
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
        swiper: swiper,
        },
    });


    // FOOTER
  const form = document.querySelector('.input-validation-type');
  form.addEventListener('sl-submit', () => alert("Thanks for reaching out, we'll get back to you shortly!"));




