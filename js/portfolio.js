// Portfolio-specific JavaScript

// Portfolio Gallery with Image Details
function initializePortfolioGallery() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.dataset.title || 'Untitled';
            const description = this.dataset.description || 'No description available.';
            const location = this.dataset.location || 'Location not specified';
            const date = this.dataset.date || 'Date not specified';
            const category = this.dataset.category || 'Uncategorized';
            
            if (img) {
                openImageModal({
                    src: img.src,
                    alt: img.alt,
                    title: title,
                    description: description,
                    location: location,
                    date: date,
                    category: category
                });
            }
        });
        
        // Add keyboard support
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'View image details');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const img = this.querySelector('img');
                const title = this.dataset.title || 'Untitled';
                const description = this.dataset.description || 'No description available.';
                const location = this.dataset.location || 'Location not specified';
                const date = this.dataset.date || 'Date not specified';
                const category = this.dataset.category || 'Uncategorized';
                
                if (img) {
                    openImageModal({
                        src: img.src,
                        alt: img.alt,
                        title: title,
                        description: description,
                        location: location,
                        date: date,
                        category: category
                    });
                }
            }
        });
    });
}

// Open Image Modal with Details
function openImageModal(data) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLocation = document.getElementById('modalLocation');
    const modalDate = document.getElementById('modalDate');
    const modalCategory = document.getElementById('modalCategory');
    
    // Set image
    modalImage.src = data.src;
    modalImage.alt = data.alt;
    
    // Set content
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalLocation.textContent = data.location;
    modalDate.textContent = data.date;
    
    // Format category name
    const categoryNames = {
        'wedding': 'Wedding Photography',
        'portrait': 'Portrait Photography',
        'fashion': 'Fashion Photography',
        'commercial': 'Commercial Photography',
        'event': 'Event Photography',
        'nature': 'Nature Photography'
    };
    modalCategory.textContent = categoryNames[data.category] || data.category;
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.focus();
    
    // Close handlers
    closeBtn.addEventListener('click', closeImageModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeImageModal);
    
    function escHandler(e) {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', escHandler);
        }
    }
    
    document.addEventListener('keydown', escHandler);
    
    function closeImageModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.removeEventListener('keydown', escHandler);
    }
}

// Category Filter Functionality
const categoryButtons = document.querySelectorAll('.category-filter');
if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            filterPortfolio(category);
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    let visibleCount = 0;
    
    portfolioItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
            visibleCount++;
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    // Update URL without reload
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url);
}

// Check URL parameters for category filter on page load
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');
if (categoryParam) {
    const categoryButton = document.querySelector(`[data-category="${categoryParam}"]`);
    if (categoryButton) {
        categoryButton.click();
    }
}

// Initialize on page load
if (document.querySelector('.portfolio-grid')) {
    initializePortfolioGallery();
}

