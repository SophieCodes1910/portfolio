document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init('gECsT5O4gQUSEfSL6');  // Replace with your actual EmailJS User ID

    const form = document.getElementById('contact-form');
    const submitButton = document.querySelector('.submit-button');

    const sendMail = () => {
        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_gbl8bhj', 'template_6gbewll', params)
            .then(() => {
                alert('Email Sent!!');  // Alert after successful sending
                form.reset(); // Clear the form after successful submission
            })
            .catch((error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);  // Log any errors for debugging
            });
    };

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent default button action
        sendMail();  // Call the sendMail function
    });
});


    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none'; 
        });
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Initialize the first slide
    showSlide(currentIndex);
});





