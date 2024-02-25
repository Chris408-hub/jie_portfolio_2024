import { hamburgerMenu } from './modules/hamburger.js';
import { textAnimation } from './modules/animation.js';
import { show } from './modules/show.js';
import { videoControls } from './modules/video.js';
import { thanksPage } from './modules/lightbox.js';

console.log("called");

//Call Burger Menu as it is used on all pages
hamburgerMenu();

// Add specific logic for each page
const pathname = window.location.pathname;

if (document.body.dataset.page === 'project-page') {
  videoControls();
  show();
}  else if (document.body.dataset.page === 'about-page') {
  textAnimation();
} else if (document.body.dataset.page === 'contact-page') {
  thanksPage();
};
