// Load after page load
document.addEventListener('DOMContentLoaded', function () {

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
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Add a click event listener to the button
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This makes the scroll smooth
        });
    });

    // Show the button when the user scrolls down 20px from the top of the document
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    // End Scroll to top


    // Experience
    function showExplanation(topicNumber) {
        // Hide all explanations
        const explanations = document.querySelectorAll('.explanation');
        explanations.forEach(explanation => {
            explanation.classList.add('hidden');
        });

        // Show the selected explanation
        document.getElementById(`explanation${topicNumber}`).classList.remove('hidden');

        // Highlight the selected topic
        const topics = document.querySelectorAll('#topicsList li');
        topics.forEach(topic => {
            topic.classList.remove('selected-experience');
        });
        topics[topicNumber - 1].classList.add('selected-experience');
    }

    // Set the default explanation
    document.addEventListener('DOMContentLoaded', () => {
        showExplanation(1);
    });
    // End Experience


    // Get the current year
    var currentYear = new Date().getFullYear();

    document.getElementById('year').textContent = currentYear;
    // End: Current Year 

});