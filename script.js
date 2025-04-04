// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We have received your message and will contact you at ${email}.`);

    // Reset the form fields
    e.target.reset();
});
