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
    const btn = document.getElementById('contact-form-submit-button');
    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    btn.style.border = 'gray';

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

    // Function to handle navbar item clicks
    function handleNavItemClick() {
        // Remove active class from all items
        navItems.forEach(nav => nav.classList.remove('active'));

        // Add active class to the clicked item
        this.classList.add('active');
    }

    // Attach click event listener to each navbar item
    navItems.forEach(item => {
        item.addEventListener('click', handleNavItemClick);
    });

    // Get the service select element and the subject input
    const serviceSelect = document.getElementById('service-select');
    const subjectInput = document.getElementById('subject-input');
    
    // Function to update hidden input value
    function updateHiddenInput() {
        subjectInput.value = serviceSelect.value;
    }

    // Attach change event listener to the service select element
    serviceSelect.addEventListener('change', updateHiddenInput);

    // Initialize hidden input with default value
    updateHiddenInput();

    // Ensure the placeholder option is selected initially
    serviceSelect.selectedIndex = 0; // This line ensures the first option (placeholder) is selected
});
