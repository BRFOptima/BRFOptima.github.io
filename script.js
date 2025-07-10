// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling för navigeringslänkar
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Förhindra standardbeteendet (direkt hopp)

            const targetId = this.getAttribute('href'); // Få ID från href
            const targetElement = document.querySelector(targetId); // Hitta elementet

            if (targetElement) {
                // Scrolla mjukt till elementet
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.App-header').offsetHeight, // Justera för fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hantera klick på CTA-knappen i hero-sektionen
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Skrolla till kontaktsektionen när knappen klickas
            const contactSection = document.getElementById('kontakt');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - document.querySelector('.App-header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});