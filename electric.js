// intro-title animation  
var textWrapper = document.querySelector('.intro-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.intro-title .letter',
     translateY: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1400,
     delay: function(el, i) {
     return 300 + 30 * i;
     }
}).add({
     targets: '.intro-title .letter',
     translateY: [0,-40],
     opacity: [1,0],
     easing: "easeInExpo",
     duration: 1200,
     delay: function(el, i) {
     return 100 + 30 * i;
     }
});


// hero-title animation
var textWrapper = document.querySelector('.hero-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.hero-title .letter',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1200,
     delay: function(el, i) {
     return 8000 + 30 * i;
     }
});


// reveling other elements
TweenMax.to(".loading-screen", 2.2, {
     delay: 3.8,
     top: "-100%",
     ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
     delay: 5.2,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".hero-text", 2, {
     delay: 5.2,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
     delay: 5.3,
     y: 20,
     opacity: 0,
     ease: Expo.easeInOut
});


TweenMax.from(".bar", 2, {
    delay: 7.2,
    width: "0%",
    ease: Expo.easeInOut
});

TweenMax.from(".project", 2, {
     delay: 5.9,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".project1", 2, {
     delay: 5.9,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".project2", 2, {
     delay: 5.9,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".project3", 2, {
     delay: 5.9,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
     delay: 6.2,
     opacity: 0,
     y: 20,
     ease: Power3.easeInOut
}, 0.1);