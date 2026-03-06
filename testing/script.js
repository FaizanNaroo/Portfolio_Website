// Smooth scrolling for anchor links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in classes
document.querySelectorAll('.about-content, .education-card, .project-card, .timeline-item, .exp-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for the ASCII header
const asciiElement = document.querySelector('.ascii-header pre');
if (asciiElement) {
    const text = asciiElement.textContent;
    asciiElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            asciiElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', typeWriter);
}

// Mouse move parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = hero.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        const title = hero.querySelector('h1');
        if (title) {
            title.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const title = hero.querySelector('h1');
        if (title) {
            title.style.transform = 'translate(0, 0)';
        }
    });
}

// Dynamic skill tags hover effect
document.querySelectorAll('.skill-tags span').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1) translateY(-2px)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1) translateY(0)';
    });
});

// Project cards hover effect with 3D tilt
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();

        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;

        card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    });
});

// Contact button click handler
const contactBtn = document.querySelector('.contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        // Create a simple modal or alert for now
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'var(--card-bg)';
        modal.style.padding = '2rem';
        modal.style.borderRadius = '12px';
        modal.style.border = '1px solid var(--accent-primary)';
        modal.style.zIndex = '1000';
        modal.style.boxShadow = '0 0 50px rgba(0, 255, 157, 0.3)';
        modal.style.animation = 'fadeInUp 0.3s ease';

        modal.innerHTML = `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Send a Message</h3>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">Thanks for reaching out! This is a demo portfolio.</p>
            <p style="color: var(--text-secondary);">In a real portfolio, this would open a contact form.</p>
            <button style="background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: var(--bg-primary); border: none; padding: 0.5rem 1.5rem; border-radius: 8px; margin-top: 1rem; cursor: pointer; font-weight: 600;">Close</button>
        `;

        document.body.appendChild(modal);

        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '999';
        overlay.style.backdropFilter = 'blur(5px)';
        document.body.appendChild(overlay);

        // Close modal function
        const closeModal = () => {
            modal.remove();
            overlay.remove();
        };

        // Add click handler to close button
        modal.querySelector('button').addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
    });
}

// Dynamic year update in footer
const year = new Date().getFullYear();
const footerAscii = document.querySelector('.footer-ascii pre');
if (footerAscii) {
    footerAscii.textContent = footerAscii.textContent.replace('2024', year);
}

// Random glitch effect on hover for the main title
const mainTitle = document.querySelector('.glitch');
if (mainTitle) {
    mainTitle.addEventListener('mouseenter', () => {
        mainTitle.style.animation = 'none';
        setTimeout(() => {
            mainTitle.style.animation = 'glitch-skew 4s infinite';
        }, 100);
    });
}

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.background = 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))';
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.1s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Copy email to clipboard functionality
document.querySelectorAll('.social-link .fa-envelope').forEach(emailIcon => {
    emailIcon.parentElement.addEventListener('click', (e) => {
        e.preventDefault();
        const email = 'your.email@example.com'; // Replace with actual email

        navigator.clipboard.writeText(email).then(() => {
            // Show temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied!';
            tooltip.style.position = 'fixed';
            tooltip.style.top = '20px';
            tooltip.style.right = '20px';
            tooltip.style.background = 'var(--accent-primary)';
            tooltip.style.color = 'var(--bg-primary)';
            tooltip.style.padding = '0.5rem 1rem';
            tooltip.style.borderRadius = '8px';
            tooltip.style.fontWeight = '600';
            tooltip.style.zIndex = '10000';
            tooltip.style.animation = 'fadeInUp 0.3s ease';

            document.body.appendChild(tooltip);

            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
});

// Preload animation for page load
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 1s ease';
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🚀 Welcome to my portfolio!', 'color: #00ff9d; font-size: 20px; font-weight: bold;');
console.log('%c👨‍💻 Built with HTML, CSS, and JavaScript', 'color: #00b8ff; font-size: 14px;');
console.log('%c📬 Feel free to reach out!', 'color: #e4e6eb; font-size: 14px;');