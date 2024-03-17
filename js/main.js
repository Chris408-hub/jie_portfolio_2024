import { hamburgerMenu } from './modules/hamburger.js';
import { textAnimation } from './modules/textanimation.js';
import { projectAnimation } from './modules/projectanimation.js';

import { show } from './modules/show.js';
import { imgAnimation } from './modules/imganimation.js';
// import { videoControls } from './modules/video.js';
import { ajaxData } from './modules/ajax.js';
import { scrollForm } from './modules/scrollanimation.js';


console.log("called");

//Call Burger Menu as it is used on all pages
hamburgerMenu();

// Add specific logic for each page
const pathname = window.location.pathname;

if (document.body.dataset.page === 'index-page') {
  textAnimation();

}else if (document.body.dataset.page === 'project-page') {
  show();
  projectAnimation();

}  else if (document.body.dataset.page === 'about-page') {
  imgAnimation();

} else if (document.body.dataset.page === 'contact-page') {
  ajaxData();
  scrollForm();
  
};

