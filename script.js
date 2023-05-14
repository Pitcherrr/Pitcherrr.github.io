const burger = document.querySelector(".nav-icon")
// gsap.set('body',{overflow:"hidden"})

burger.addEventListener("click", () => {
    if(burger.classList.contains("active")){
        gsap.to(".links", {x: "100%"});
        gsap.set('body',{overflow:"auto"})
        gsap.set('body',{overflowX:"hidden"})
    }else{
        gsap.to(".links", {x: "0%"});
        gsap.fromTo('.links a', {opacity:0},{opacity:1, delay:0.25, stagger:0.25})
        gsap.set('body',{overflow:"hidden"})
    }
    burger.classList.toggle("active")
});

//const videos = gsap.utils.toArray(".iframe");
const videos = [".funny",".clips"];

if (window.matchMedia('(max-width: 767px)').matches) {
  // Code to execute when the screen width is <= 800px
  console.log('Viewing on a smaller device');
} else {
  // Code to execute when the screen width is > 800px
  gsap.set(videos, {opacity:0});
  videos.forEach((iframe) => {
      ScrollTrigger.create({
          trigger:iframe,
          start:"top center+=200",
          end:"bottom center",
          markers: true,
          onEnter: () => {
              gsap.to(iframe, {opacity: 1})   
              gsap.to(".clips", {opacity: 1})
          }
      });
  });
}

// window.onscroll = function() {
//     scrollFunction();
//   };

//   function scrollFunction() {
//     var header = document.getElementById(".menu-bar");
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   }



function dark_mode() {
  var element = document.body;
  element.classList.toggle("mode");
  var change = document.getElementById("dark-mode-button");
  if (change.innerHTML == "Dark Mode")
  {
      change.innerHTML = "Light Mode";
  }
  else {
      change.innerHTML = "Dark Mode";
  }
}
