// Mobile Menu Setup
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value || 'Not provided',
                business: document.getElementById('business')?.value || 'Not specified',
                service: document.getElementById('service')?.value || 'Not specified',
                message: document.getElementById('message')?.value || 'No message',
                timestamp: new Date().toISOString(),
                page: window.location.pathname
            };
            
            console.log('Form submission:', formData);
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.add('show');
            }
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.remove('show');
                }
            }, 5000);
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});