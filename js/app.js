
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


let navAnchor = [];
const list = document.querySelector('#navbar__list');
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

function jumpTo() {
  let listItemArray = document.querySelectorAll('li');
  let forEachCount = 0
  listItemArray.forEach(move => move.addEventListener("click", function() {
    forEachCount += 1;
    document.getElementById('section' + forEachCount.toString()).scrollIntoView({
      behavior: 'smooth'
    });
  }));
}

jumpTo();

/*elementsArray.forEach(el => el.addEventListener('input', functionThatDoesStuff))*/

// Get the section3 tag
let sectionList = document.querySelectorAll('section');
// Get it's position in the viewport
function viewportCheck() {
  for (listItem of sectionList) {
    let isInViewport = function (listItem) {
        let posSection = listItem.getBoundingClientRect();
        return (
          posSection.top >= 0 &&
          posSection.left >= 0 &&
          posSection.right <= (window.innerWidth || document.documentElement.clientWidth) &&
          posSection.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      };
      let notActive = document.querySelector('.your-active-class')
      if (isInViewport(listItem)) {
        notActive.classList.remove('your-active-class');
        listItem.classList.add('your-active-class');
      }
    }
  }

viewportCheck();

let scrollCheck = window.addEventListener('scroll', viewportCheck);



function addButton() {
  let findPara = document.querySelectorAll('section');
  findPara.forEach(btnPos => btnPos.insertAdjacentHTML('beforeend', '<div class="wrapper"><button class="button">Button</button></div>'));
  document.querySelector('.wrapper').setAttribute('style', 'justify-content: center');
}

addButton();

/*let wrpr = document.querySelector('.wrapper');
let wrapperStyle = wrpr.setAttribute('style', '');
let btn = document.querySelector('.button');
let buttonStyle =  btn.setAttribute('style', 'position: absolute; top: 50%');*/






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
