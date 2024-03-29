// JS File for my website 
// Author: Tom Pitcher

//Mobile pop out menu bar
const burger = document.querySelector(".nav-icon")
burger.addEventListener("click", () => {
    if(burger.classList.contains("on")){
        gsap.to(".links", {x: "100%"});
        gsap.set('body',{overflow:"auto"})
        gsap.set('body',{overflowX:"hidden"})
    }else{
        // stagger the loading of elements for a waterfall effect
        gsap.to(".links", {x: "0%"});
        gsap.fromTo('.links a', {opacity:0},{opacity:1, delay:0.25, stagger:0.25})
        gsap.set('body',{overflow:"hidden"})
    }
    burger.classList.toggle("on")
});


//Code for only showing youtube videos when viewing on larger devices as on smaller devices the start points are altered
const videos = [".video-1",".video-2"];
if (window.matchMedia('(max-width: 767px)').matches) {
  console.log('Mobile View Active');
} 
else {
  // Code to execute when the screen width is > 767px
  gsap.set(videos, {opacity:0});
//   loop over the iframes
  videos.forEach((iframe) => {
      ScrollTrigger.create({
          trigger:iframe,
          start:"top center+=250",
          end:"bottom center",
          markers: false,
          onEnter: () => {
              gsap.to(iframe, {opacity: 1})   
              gsap.to(".video-2", {opacity: 1})
          }
      });
  });
}


//code to swich dark mode on, most of the code is also to change the text on the buttons
function dark_mode() {
    var element = document.body;
    element.classList.toggle("mode");
    var changes = document.getElementsByClassName("dark-mode-button");
    for (var i = 0; i < changes.length; i++) {
        if (changes[i].innerHTML == "Dark Mode") {
            // console.log('Changed text');
            changes[i].innerHTML = "Light Mode";
        } else {
            changes[i].innerHTML = "Dark Mode";
        }
    }
}


//code for transitions
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    //select only the anchors that link to internal pages
    const anchors = document.querySelectorAll('a[href^="/"]'); 
    setTimeout(() =>{
        transition_el.classList.remove('is-active')
    }, 300);

    for (let i=0; i<anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener('click', e=> {
            e.preventDefault();
            let target = e.target.href;
            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 300)
        })
    }
}

//code for drop down
function drop_down(n) {
    // console.log("Drop down for element "+n)
    // condition for when on the blog page as does not have a video 
    if (n == 3) {
        // console.log('blog dropdown')
        var element1 = document.querySelector('.blog-1-text');
        var element2 = document.querySelector('.blog-1-img');
        var elements = [element1, element2];
    }
    else {
        var element1 = document.querySelector('.project-' + n + '-text');
        var element2 = document.querySelector('.project-' + n + '-img');
        var element3 = document.querySelector('.project-' + n + '-video');
        var elements = [element1, element2, element3];}
    //loop over the elements and fade them in 
    for (let i=0; i<elements.length; i++) {
        var element = elements[i];
        element.classList.toggle("dd");
        gsap.to(element, {x: "0%"});
        gsap.fromTo(element, {opacity:0},{opacity:1, delay:0.25, stagger:0})
}}