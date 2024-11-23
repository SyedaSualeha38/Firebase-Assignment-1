// FAQ Toggle Functionality
document.querySelectorAll('.faqbox').forEach(faqItem => {
    faqItem.addEventListener('click', () => {
        // Toggle the 'open' class for FAQ box, so it expands or collapses
        faqItem.classList.toggle('open');
        // Toggle the icon inside the FAQ box between plus and minus
        const icon = faqItem.querySelector('i');
        if (faqItem.classList.contains('open')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

// Handling form submission for "Get Started" button
const emailInput = document.querySelector('.btn5');
const getStartedButton = document.querySelector('.btn6');

getStartedButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email) {
        // Here you can perform the form submission (e.g., send the email to the server)
        alert('Form Submitted: ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
});

// Handling button hover effects for accessibility
document.querySelectorAll('.btn1, .btn2, .btn3, .btn4, .btn5, .btn6').forEach(button => {
    button.addEventListener('focus', () => {
        button.style.outline = '2px solid #e50914'; // Add focus outline
    });
    button.addEventListener('blur', () => {
        button.style.outline = 'none'; // Remove focus outline
    });
});
