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
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function navItemInHTML(id, name){
    const addHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return addHTML;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function onview (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// build the nav
function buildNavigation(){
    for (let i=0; i < sections.length; i++){
        const newMenu = document.createElement('li');
        const sectionumber = sections[i].getAttribute('data-nav')
        const sectionId = sections[i].getAttribute('id')
        newMenu.innerHTML = navItemInHTML(sectionId, sectionumber)
         fragment.appendChild(newMenu);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function ActiveClass(){
    for (let i=0; i < sections.length; i++){
        if (onview(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}



/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener('scroll', function(){
    setActiveClass();
});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})
// Build menu
buildNavigation()
// Scroll to section on link click

// Set sections as active
