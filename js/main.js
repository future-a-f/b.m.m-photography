// Main JavaScript for Photography Portfolio

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        if (window.scrollY > heroHeight - 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    } else {
        // For pages without hero section
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Hero Slider
const heroSlider = document.getElementById('heroSlider');
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % heroSlides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(prev);
}

if (heroNext) {
    heroNext.addEventListener('click', nextSlide);
}

if (heroPrev) {
    heroPrev.addEventListener('click', prevSlide);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        resetSlideInterval();
    });
});

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

if (heroSlides.length > 0) {
    startSlideInterval();
}

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
} else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
        img.classList.add('loaded');
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close Mobile Menu on Link Click
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Portfolio Gallery initialization is now handled in portfolio.js
// This function is kept for backward compatibility but portfolio.js takes precedence

// Lightbox Functionality
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.focus();
    
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    function escHandler(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    }
    
    document.addEventListener('keydown', escHandler);
    
    function closeLightbox() {
        lightbox.remove();
        document.body.style.overflow = '';
        document.removeEventListener('keydown', escHandler);
        // Return focus to the element that opened the lightbox
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('portfolio-item')) {
            activeElement.focus();
        }
    }
}

// Form Validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showFormError('Please fill in all required fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormError('Please enter a valid email address.');
            return;
        }
        
        // Form submission would go here
        showFormSuccess('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    contactForm.insertBefore(errorDiv, contactForm.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function showFormSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.textContent = message;
    
    const existingSuccess = document.querySelector('.form-success');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Category Filter (for portfolio page)
const categoryButtons = document.querySelectorAll('.category-filter');
if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterPortfolio(category);
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Check URL parameters for category filter
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');
if (categoryParam) {
    const categoryButton = document.querySelector(`[data-category="${categoryParam}"]`);
    if (categoryButton) {
        categoryButton.click();
    }
}

