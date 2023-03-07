const burger = document.querySelector("nav svg")

burger.addEventListener("click", () => {
    if(burger.classList.contains("active")){
        gsap.to(".links", {x: "100%"});
        gsap.set('body',{overflow:"auto"})
    }else{
        gsap.to(".links", {x: "0%"});
        gsap.fromTo('.links a', {opacity:0},{opacity:1, delay:0.25, stagger:0.25})
        gsap.set('body',{overflow:"hidden"})
    }
    burger.classList.toggle("active")
});

//const videos = gsap.utils.toArray(".iframe");
const videos = [".funny",".clips"];

gsap.set(videos, {opacity:0});

videos.forEach((iframe) => {
    ScrollTrigger.create({
        trigger:iframe,
        start:"top center",
        end:"bottom center",
        onEnter: () => {
            gsap.to(iframe, {opacity: 1})
        }
    });
});
