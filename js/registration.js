// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add parallax effect to background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.container').style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add intersection observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe content elements
const content = document.querySelector('.content');
observer.observe(content);