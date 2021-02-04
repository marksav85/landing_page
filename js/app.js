
const card = document.querySelector('.your-active-class').innerHTML;
const previousSection = document.querySelector('#section3');
/*const allSections = document.getElementsByTagName('section');*/
/*const newSection = document.createElement('div');*/
/*newSection.setAttribute('class', 'newContainer');*/
/*newSection.insertAdjacentHTML('afterend', card);*/
/*previousSection.insertAdjacentHTML('afterend', newSection);*/
/*previousSection.insertAdjacentHTML('afterend', card);*/
/*previousSection.appendChild(card);*/

/*function addSection() {
previousSection.insertAdjacentHTML('afterend', '<section data-nav="Section 4" class="newSection"></section>');
document.querySelector('.newSection').insertAdjacentHTML('afterbegin', card);
}; */

let sectionCount = 3
let runCount = 0

function addSection() {
  while (runCount < sectionCount) {
    previousSection.insertAdjacentHTML('afterend', '<section data-nav="Section 4" class="newSection"></section>');
    document.querySelector('.newSection').insertAdjacentHTML('afterbegin', card);
    runCount += 1;
  }
}

addSection();


/*function addSection() {
  previousSection.insertAdjacentHTML('afterend', "<div data-nav="Section 4" class="your-active-class"></div>");
}*/

const list = document.querySelector('#navbar__list');
const htmlTextToList = '<li>Skydiving is fun!</li>';
list.insertAdjacentHTML('afterbegin', htmlTextToList);

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
