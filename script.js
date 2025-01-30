const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const body = document.body;
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryItems[index].src;
    lightbox.classList.add('show');
}

function closeLightbox() {
    lightbox.classList.remove('show');
}

// Toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') navigate(-1);
    if (event.key === 'ArrowRight') navigate(1);
});

// Close on outside click
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) closeLightbox();
});

// Navigate images
function navigate(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
}
