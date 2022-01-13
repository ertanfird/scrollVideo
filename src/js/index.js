import $  from 'jquery';
import '../scss/main.scss';
import { TweenMax, TweenLite, Draggable } from 'gsap' 
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

//scrollMagic
/*--------------------------------------*/
const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = document.querySelector('.sticky-text');
const nextSection = document.querySelector('.description');
const end = nextSection.querySelector('h1');

// init controller
var controller = new ScrollMagic.Controller();
 
// create a scene
const scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElemnt: intro,
    triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
	scrollpos = e.scrollPos / 200;
  if (scrollpos < 20) {
    delay += (scrollpos - delay) * accelamount;

    video.pause(); 
    video.currentTime = delay;
  }
  console.log(scrollpos, video.currentTime);
});

// setInterval(() => {
// 	delay += (scrollpos - delay) * accelamount;

//   video.pause(); 
// 	video.currentTime = delay;
//   //console.log(scrollpos, video.currentTime);
// }, 99);