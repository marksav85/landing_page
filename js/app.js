
const card = document.querySelector('.your-active-class').innerHTML;

let secIdName = 'section'
let secClassName = 'Section '
let defaultSections = 3
let addedSections = 3
let totalSections = defaultSections + addedSections
let secNum = defaultSections
let secNumStr = secNum.toString();
let runCount = 0
let previousSection = document.querySelector('#section' + secNumStr);
let sectionHeadings = ""


function addSection() {
  while (runCount < addedSections) {
    secNum += 1
    secNumStr = secNum.toString();
    previousSection.insertAdjacentHTML('afterend', '<section id="newSection"></section>');
    document.querySelector('#newSection').insertAdjacentHTML('afterbegin', card);
    document.getElementById("newSection").setAttribute("id", "section" + secNumStr);
    previousSection = document.querySelector('#section' + secNumStr);
    sectionHeadings = previousSection.getElementsByTagName('h2');
    sectionHeadings.innerHTML('Section ' + secNumStr);
    runCount += 1;
  }
}

addSection()



const list = document.querySelector('#navbar__list');
const listItem = '<li><h3><a href="#section3">Section 3</a></h3></li>';

function addNavItem() {
  runCount = 0
  while (runCount < totalSections) {
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
let findSection = document.querySelector('#section3');
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

const notActive = document.querySelector('.your-active-class')
if (isInViewport(findSection)) {
  notActive.classList.remove('your-active-class');
  findSection.classList.add('your-active-class');
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
