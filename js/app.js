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

// addSection variables
const contentCard = document.querySelector('.your-active-class').innerHTML;
const defaultSections = 3 // Sections created in index.html file
let addedSections = 3 // Sections added by JS
let totalSections = defaultSections + addedSections
let sectionNum = defaultSections
let sectionNumStr = sectionNum.toString();
let loopCount = 0
let newSection = document.querySelector('#section' + sectionNumStr);
let sectionHeadings = document.getElementsByTagName("h2")[0];

// addNavItem variables
const list = document.querySelector('#navbar__list');
let navAnchor = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Add further sections based on addedSections variable (set to 3 as standard)
function addSection() {
  loopCount = 0
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
 addSection();

// Inserts a button at the end of each section
function addButton() {
 document.querySelectorAll('section').forEach(newButton => newButton.insertAdjacentHTML('beforeend', '<div class="wrapper"><button class="button">Return to Top</button>'));
}
addButton();

// Places the button in the middle of each section
function placeButton() {
  const findButton = document.querySelectorAll('.wrapper');
  findButton.forEach(buttonPlacement => buttonPlacement.setAttribute('style', 'text-align: center;'));
}
placeButton();

// Adds styling to each button
function styleButton() {
  const buttonList = document.querySelectorAll('button');
  for (buttons of buttonList) {
    buttons.setAttribute('style', 'border-radius: 3em; background-color: #4eb5f1; color: #FFFFFF; border: none; outline: none');
  }
}
styleButton();

// Adds scroll to top function on button click
function scrollToTop() {
  const returnToTop = document.querySelectorAll('button');
  returnToTop.forEach(scrollUp => scrollUp.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}));
}
scrollToTop();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build the nav
function addNavItem() {
  loopCount = 0
  let reverseCount = totalSections;
  while (loopCount < totalSections) {
    let listItem = '<li id=' + reverseCount.toString() + ' ><h3>Section ' + reverseCount.toString() + ' ' + '</h3></li>';
    list.insertAdjacentHTML('afterbegin', listItem);
    const listStyle = document.querySelector('li').setAttribute('style', 'color: blue; padding-right: 10px');
    loopCount += 1;
    reverseCount -= 1;
    navAnchor.push(loopCount);
  }
}
addNavItem();

// Add class 'active' to section when near top of viewport
function viewportCheck() {
  let sectionList = document.querySelectorAll('section');
  for (listItem of sectionList) {
    let isInViewport = function (listItem) {
        let posSection = listItem.getBoundingClientRect();
        return (posSection.top > -300 && 300 > posSection.top);
      };
      const notActive = document.querySelector('.your-active-class')
      if (isInViewport(listItem)) {
        notActive.classList.remove('your-active-class');
        listItem.classList.add('your-active-class');
      }
    }
  }
viewportCheck();

const scrollCheck = window.addEventListener('scroll', viewportCheck);


// Scroll to anchor ID using scrollTo event
function sectionScroll() {
  const listItemArray = document.querySelectorAll('li');
  let forEachCount = 0
  listItemArray.forEach(move => move.addEventListener("click", function() {
    forEachCount += 1;
    document.getElementById('section' + forEachCount.toString()).scrollIntoView({
      behavior: 'smooth'
    });
  }));
}
sectionScroll();

/**
 * End Main Functions
*/
