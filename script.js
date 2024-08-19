document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init('gECsT5O4gQUSEfSL6'); // Replace with your actual EmailJS public user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('service_gbl8bhj', '6gbewll', this) // Replace with your service ID and template ID
            .then(function(response) {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset(); // Reset the form fields
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error); // Log detailed error
            });
    });

    // Carousel functionality
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showSlide(index) {
        if (index >= totalItems) {
            currentIndex = 0; // Wrap around to the first item
        } else if (index < 0) {
            currentIndex = totalItems - 1; // Wrap around to the last item
        } else {
            currentIndex = index;
        }

        // Move carousel
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Initialize the first slide
    showSlide(currentIndex);



});



