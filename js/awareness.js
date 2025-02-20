// Add animation to cards on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.topic-card, .article-card, .video-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add hover effect to video thumbnails
document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseenter', () => {
        thumbnail.querySelector('.play-button').style.transform = 'translate(-50%, -50%) scale(1.1)';
    });

    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.querySelector('.play-button').style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Add click handler (you can replace this with actual video functionality)
    thumbnail.addEventListener('click', () => {
        alert('Video will play here');
    });
});