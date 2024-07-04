// Preloader

// End Preloader

// Navbar Toggle
const toggleButton = document.getElementById('toggleNav');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const navMenu = document.getElementById('navbar-collapse-with-animation');

toggleButton.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('md:flex');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
// End: Navbar Toggle


// Current Year 
// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the span with id 'year'
document.getElementById('year').textContent = currentYear;

// End: Current Year 

// Dissappearing text
const text = document.getElementById('typed-text');
const originalText = text.innerText.trim();
let index = 0;
let intervalId;

function animateText() {
    intervalId = setInterval(() => {
        if (index <= originalText.length) {
            text.innerText = originalText.slice(0, index);
            index++;
        } else {
            clearInterval(intervalId);
            setTimeout(() => {
                index = 0;
                text.innerText = '';
                animateText();
            }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }
    }, 300); // Adjust the speed (100ms) as needed
}

animateText();
// End Dissappearing text


// Scroll to top
// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// End Scroll to top
