
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
const listItem = '<li><h3><a href="#section3">Section 3</a></h3></li>';

let navCount = sectionCount + 3

function addNavItem() {
  runCount = 0
  while (runCount < navCount) {
    list.insertAdjacentHTML('afterbegin', listItem);
    const listStyle = document.querySelector('li').setAttribute('style', 'color: blue');
    runCount += 1;
  }
}

addNavItem();

const scrollToContent = document.querySelector('#section3')
const clickToView = document.querySelector('li');
clickToView.addEventListener('click', function () {
  scrollToContent.scrollIntoView({behavior: "smooth"});
});

// Get the section3 tag
const findSection = document.querySelector('#section3');
// Get it's position in the viewport
let posSection = findSection.getBoundingClientRect();

const isInViewport = function (findSection) {
    let posSection = findSection.getBoundingClientRect();
    return (
      posSection.top >= 0 &&
      posSection.left >= 0 &&
      posSection.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      posSection.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

if (isInViewport(findSection)) {
    console.log('success!')
}


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
