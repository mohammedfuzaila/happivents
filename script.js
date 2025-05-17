// Function to handle package selection and show booking alert
function selectPackage(packageType) {
    // Get the package details from the clicked button's parent card
    const card = event.target.closest('.royal-card');
    const packageName = card.querySelector('h3').textContent.trim();
    const price = card.querySelector('.price').textContent;
    const features = Array.from(card.querySelectorAll('ul li')).map(li => li.textContent);

    // Create a formatted message
    const message = `
🎉 Pre-booking Confirmation 🎉

Package: ${packageName}
Price: ${price}

Features:
${features.map(feature => `• ${feature}`).join('\n')}

Would you like to proceed with this booking?

Note: This is a pre-booking confirmation. Our team will contact you shortly to finalize the details.
    `;

    // Show the alert
    if (confirm(message)) {
        alert('Thank you for your interest! Our team will contact you within 24 hours to confirm your booking.');
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to all booking buttons
    const bookingButtons = document.querySelectorAll('.bt');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            selectPackage(event.target.textContent);
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});