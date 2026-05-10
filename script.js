// Navbar transparency and scroll shadow
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        nav.style.height = '70px';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.height = '80px';
    }
});

// Highlighting active link in navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation || (currentLocation === '' && linkPath === 'index.html')) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = '700';
            link.classList.add('active-link');
        }
    });
});

// Simple animation on scroll for cards
const observerOptions = {
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

document.querySelectorAll('.card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

function pesan() {
    alert("Halo! Terima kasih telah mengunjungi website SMK Teknologi Indonesia.");
}
