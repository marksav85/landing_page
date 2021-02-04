const card = document.querySelector('.your-active-class').innerHTML;
const previousSection = document.querySelector('#section3');
/*const allSections = document.getElementsByTagName('section');*/
const newSection = document.createElement('div');
newSection.setAttribute('class', 'newContainer');
/*newSection.insertAdjacentHTML('afterend', card);*/
/*previousSection.insertAdjacentHTML('afterend', newSection);*/
/*previousSection.insertAdjacentHTML('afterend', card);*/
previousSection.appendChild(newSection);





/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
