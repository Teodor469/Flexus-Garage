document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('contact-us-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the email and message input elements
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('name');

    // Retrieve the values of the email and message fields
    const email = emailInput.value;
    const message = messageInput.value;
    this.submit();
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar items
    const navItems = document.querySelectorAll('.navbar-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to the clicked item
            this.classList.add('active');
        });
    });
});