document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimation();
    initLazyLoading();
    initVideoBehavior();
    initDropdown();
});

// Dropdown Logic
function initDropdown() {
    const dropdownContainer = document.getElementById('relatedDropdown');
    const toggleBtn = dropdownContainer.querySelector('.header-related-btn');
    
    // Toggle menu on click
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContainer.classList.toggle('is-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownContainer.classList.remove('is-open');
        }
    });
}

// Scroll Fade-in Animation
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Unified Lazy Loading
function initLazyLoading() {
    const lazyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const media = entry.target;
                const src = media.dataset.src;

                if (src) {
                    if (media.tagName === 'IMG') {
                        media.src = src;
                        media.onload = () => media.classList.add('loaded');
                    } else if (media.tagName === 'VIDEO') {
                        media.src = src;
                        media.load();
                        media.onloadeddata = () => media.classList.add('loaded');
                    }
                }
                observer.unobserve(media);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('.lazy-media').forEach(media => {
        lazyObserver.observe(media);
    });
}

// Video Behavior (Controls, Click-to-Play)
function initVideoBehavior() {
    const videos = document.querySelectorAll('.content-video');
    
    videos.forEach(video => {
        video.controls = true;
        video.autoplay = false;
        video.muted = false;
        video.playsInline = true;
        video.loop = true;
        video.preload = 'none';
        
        video.style.cursor = 'pointer';
        video.addEventListener('click', (e) => {
            if (e.target === video) {
                e.preventDefault();
                video.paused ? video.play() : video.pause();
            }
        });
    });
}

// BibTeX Copy
function copyBibTeX() {
    const text = document.getElementById('bibtex-text').innerText;
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.background = '#1d1d1f';
        btn.style.color = '#fff';
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Copy failed:', err);
    });
}