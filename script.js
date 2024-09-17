document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init('gECsT5O4gQUSEfSL6');  // Ensure this is your actual EmailJS User ID

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the default way

        // Make sure you're using the correct service and template ID from EmailJS
        emailjs.sendForm('service_gbl8bhj', 'template_6gbewll', form)
            .then(() => {
                alert('Message sent successfully!');
                form.reset(); // Clear the form after successful submission
            }, (error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);  // Log any errors for debugging
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




