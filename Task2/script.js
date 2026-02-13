// 1. Reveal Engine (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger counter if stat
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// 2. Custom Magnetic Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor expansion on buttons
const interactiveEls = document.querySelectorAll('button, a, .hotspot, .weight-btn');
interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'rgba(0, 242, 254, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    });
});

// 3. Scroll Status & Parallax
const scrollStatus = document.getElementById('scrollStatus');
window.addEventListener('scroll', () => {
    // Update Percentage
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    scrollStatus.innerText = `${scrollPercent}%`;

    // Parallax layers in Anatomy
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        const speed = layer.dataset.speed;
        const yPos = -(window.scrollY * speed / 10);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});

// 4. Weight Selection (Existing refined)
const weightBtns = document.querySelectorAll('.weight-btn');
const weightDisplay = document.getElementById('currentWeightDisplay');
const productImg = document.querySelector('#productImg img');

weightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        weightBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const weight = btn.dataset.weight;
        weightDisplay.innerText = `${weight} KG`;

        productImg.style.opacity = '0.4';
        setTimeout(() => {
            productImg.style.filter = `hue-rotate(${weight * 5}deg) brightness(${1 + weight / 100})`;
            productImg.style.opacity = '1';
        }, 300);
    });
});

// 5. Hotspots
const hotspotInfo = {
    'OLED Digital Display': 'A high-contrast sapphire glass display showing real-time load, rep tempo, and velocity metrics.',
    'Mag-Safe Locking System': 'Patented magnetic lock that ensures zero weight plate movement during dynamic exercises.'
};

document.querySelectorAll('.hotspot').forEach(hs => {
    hs.addEventListener('click', () => {
        const title = hs.dataset.info;
        document.getElementById('overlayTitle').innerText = title;
        document.getElementById('overlayText').innerText = hotspotInfo[title];
        document.getElementById('infoOverlay').style.display = 'flex';
    });
});

document.getElementById('closeOverlay').addEventListener('click', () => {
    document.getElementById('infoOverlay').style.display = 'none';
});
