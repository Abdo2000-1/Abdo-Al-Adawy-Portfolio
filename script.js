// Function to handle the fade-in animation on scroll
const fadeInOnScroll = () => {
    // Select all sections we want to animate
    const sections = document.querySelectorAll('section, header.hero'); // Also observe the hero header

    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');
                // Stop observing this element after it has become visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Tell the observer to watch each section and the hero header
    sections.forEach(el => {
        observer.observe(el);
    });
};

// Run the function when the page content is loaded
document.addEventListener('DOMContentLoaded', fadeInOnScroll);