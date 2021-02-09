
const contentCard = document.querySelector('.your-active-class').innerHTML;

let defaultSections = 3
let addedSections = 3
let totalSections = defaultSections + addedSections
let sectionNum = defaultSections
let sectionNumStr = sectionNum.toString();
let loopCount = 0
let newSection = document.querySelector('#section' + sectionNumStr);
let sectionHeadings = document.getElementsByTagName("h2")[0];

function addSection() {
  while (loopCount < addedSections) {
    sectionNum += 1
    sectionNumStr = sectionNum.toString();
    newSection.insertAdjacentHTML('afterend', '<section id="newSection"></section>');
    document.querySelector('#newSection').insertAdjacentHTML('afterbegin', contentCard);
    document.getElementById("newSection").setAttribute("id", "section" + sectionNumStr);
    newSection = document.querySelector('#section' + sectionNumStr);
    sectionHeadings = document.getElementsByTagName("h2")[sectionNum - 1]
    sectionHeadings.textContent = 'Section ' + sectionNumStr;
    loopCount += 1;
  }
}

addSection()



const list = document.querySelector('#navbar__list');
function addNavItem() {
  loopCount = 0
  let reverseCount = totalSections;
  while (loopCount < totalSections) {
    let listItem = '<li><h3><a href="#section' + reverseCount.toString() + '">Section ' + reverseCount.toString() + '</a></h3></li>';
    list.insertAdjacentHTML('afterbegin', listItem);
    const listStyle = document.querySelector('li').setAttribute('style', 'color: blue');
    loopCount += 1;
    reverseCount -= 1;
  }
}

addNavItem();



// Get the section3 tag
let findSection = document.querySelectorAll('section');
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
