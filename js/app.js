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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');
const activeSection = "your-active-class"


//creating nav bar
sections.forEach(section => {
    const nav = document.createElement('li'); //creating list elements
    const navLink = document.createElement('a'); //creating link to list elements
    navLink.classList.add('menu__link');
    navLink.innerText = section.getAttribute('data-nav');

    // click event listener


    nav.addEventListener('click', function(event) {
        event.preventDefault()
        const navLi = document.getElementById('navbar__list').querySelectorAll('li');
        navLi.forEach((item) => {
            item.addEventListener('click', function(event) {
                navLi.forEach((item) => {
                    item.classList.remove('menu__link-active');
                });

                item.classList.add('menu__link-active');
            });
        });
        section.scrollIntoView({ behavior: "smooth" });
    })
    nav.append(navLink);
    navbar.appendChild(nav);
});



// Add class 'active' to section when near top of viewport
function activeClass() {

    sections.forEach((section) => {
        let sectionBounds = section.getBoundingClientRect().top;

        if (sectionBounds >= 0 && sectionBounds < window.innerHeight) {

            section.classList.add(activeSection);

        } else {

            section.classList.remove(activeSection);

        }

    });


}
window.addEventListener("scroll", activeClass);

//adding class to a element (navLink)
//if clicked, do this behavior, else remove this behavior
//navLink.classList.add(activeLi)

//function activeLink(){

//}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active

// 
//document.addEventListener('DOMContentLoaded', function() {

//})