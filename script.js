/* ============================================ */
/* PERSONALISIERUNG - HIER ÄNDERN */
/* ============================================ */

// Passwort für den Geheim-Bereich
const PASSWORD = "liebe";

// Gründe warum du Myra liebst
const REASONS = [
    "Weil dein Lächeln, Dilemin, mein Herz jedes Mal zum Schmelzen bringt.",
    "Weil du, Myra, mich verstehst, auch wenn ich nichts sage.",
    "Weil du meine Welt bunter und heller machst, Dilemin.",
    "Weil jeder Moment mit dir, Myra, sich richtig anfühlt.",
    "Weil du mich zum Lachen bringst, selbst an grauen Tagen.",
    "Weil du mein sicherer Hafen bist, egal was passiert, Dilemin.",
    "Weil du genau die Person bist, nach der ich gesucht habe.",
    "Weil du mich liebst, genau so wie ich bin, Myra.",
    "Weil ich mir eine Zukunft ohne dich nicht vorstellen möchte.",
    "Weil du einfach perfekt bist – für mich, mein Dilemin."
];

// Beziehungsbeginn
const RELATIONSHIP_START = new Date('2022-12-29T00:00:00');

/* ============================================ */
/* CINEMATIC TRAILER */
/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    startTrailer();
    
    const skipBtn = document.querySelector('.skip-trailer-luxury');
    if (skipBtn) {
        skipBtn.addEventListener('click', endTrailer);
    }
});

function startTrailer() {
    createGoldParticles();
    
    // Luxury Trailer Sequence
    setTimeout(() => showStage('stage-1'), 500);
    setTimeout(() => showStage('stage-2'), 4500);
    setTimeout(() => showStage('stage-3'), 7500);
    setTimeout(() => showStage('stage-4'), 13000);
    setTimeout(() => showStage('stage-5'), 15500);
    setTimeout(() => endTrailer(), 19000);
}

function createGoldParticles() {
    const container = document.querySelector('.particles-container-luxury');
    if (!container) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'gold-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 8 + 12) + 's';
        container.appendChild(particle);
    }
}

function showStage(className) {
    document.querySelectorAll('.trailer-stage').forEach(stage => {
        stage.classList.remove('active');
    });
    const stage = document.querySelector(`.${className}`);
    if (stage) stage.classList.add('active');
}

function endTrailer() {
    const trailer = document.getElementById('trailer');
    const valentineQuestion = document.getElementById('valentineQuestion');
    
    trailer.style.opacity = '0';
    setTimeout(() => {
        trailer.style.display = 'none';
        valentineQuestion.classList.remove('hidden');
        initValentineQuestion();
    }, 1000);
}

/* ============================================ */
/* VALENTINE QUESTION (YES wächst automatisch) */
/* ============================================ */

function initValentineQuestion() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            yesClicked();
        });
    }
    
    // NO Button springt weg beim Hover
    if (noBtn) {
        noBtn.addEventListener('mouseenter', (e) => {
            moveNoButton(e);
        });
    }
}

function moveNoButton(e) {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    popHearts(e.clientX, e.clientY, 5);
}

function yesClicked() {
    const valentineQuestion = document.getElementById('valentineQuestion');
    const celebration = document.getElementById('celebration');
    
    popHearts(window.innerWidth / 2, window.innerHeight / 2, 100);
    
    setTimeout(() => {
        celebration.classList.remove('hidden');
        startFireworks();
        startConfetti();
        
        setTimeout(() => {
            openMainWebsite();
        }, 5000);
    }, 500);
}

/* ============================================ */
/* FIREWORKS */
/* ============================================ */

function startFireworks() {
    const container = document.querySelector('.fireworks-container');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFirework(container);
        }, i * 200);
    }
}

function createFirework(container) {
    const colors = ['#d4af37', '#ffd700', '#f0e68c', '#daa520', '#fff'];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.7);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

/* ============================================ */
/* CONFETTI */
/* ============================================ */

function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#d4af37', '#ffd700', '#f0e68c', '#daa520', '#fff', '#c8b896'];
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 15 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            velocityY: Math.random() * 3 + 2,
            velocityX: Math.random() * 4 - 2
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
            ctx.restore();
            
            piece.y += piece.velocityY;
            piece.x += piece.velocityX;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y > canvas.height) {
                piece.y = -20;
                piece.x = Math.random() * canvas.width;
            }
        });
        
        requestAnimationFrame(animateConfetti);
    }
    
    animateConfetti();
}

/* ============================================ */
/* OPEN MAIN WEBSITE */
/* ============================================ */

function openMainWebsite() {
    const valentineQuestion = document.getElementById('valentineQuestion');
    const mainContent = document.getElementById('mainContent');
    
    valentineQuestion.style.opacity = '0';
    
    setTimeout(() => {
        valentineQuestion.style.display = 'none';
        mainContent.classList.remove('hidden');
        initMainContent();
        
        setTimeout(() => {
            popHearts(window.innerWidth / 2, window.innerHeight / 2, 60);
        }, 500);
    }, 1000);
}

/* ============================================ */
/* MAIN CONTENT */
/* ============================================ */

function initMainContent() {
    updateTimer();
    setInterval(updateTimer, 1000);
    
    initScrollReveal();
    initEventListeners();
    initCarousel();
    initReasons();
    initBodyHearts();
}

/* ============================================ */
/* THEME SWITCHER */
/* ============================================ */

const themes = ['theme-night', 'theme-default', 'theme-rose'];
let currentThemeIndex = 0;

function initEventListeners() {
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            switchTheme();
            popHearts(e.clientX, e.clientY, 20);
        });
    }
    
    const mainHeartBtn = document.getElementById('mainHeartBtn');
    if (mainHeartBtn) {
        mainHeartBtn.addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            popHearts(x, y, 30);
        });
    }
    
    const scrollGalleryBtn = document.getElementById('scrollGalleryBtn');
    if (scrollGalleryBtn) {
        scrollGalleryBtn.addEventListener('click', () => {
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const seal = document.getElementById('seal');
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    
    if (seal && envelope && letterContent) {
        seal.addEventListener('click', () => {
            envelope.classList.toggle('opened');
            letterContent.classList.toggle('show');
            letterContent.classList.toggle('hidden');
            
            if (letterContent.classList.contains('show')) {
                const rect = seal.getBoundingClientRect();
                popHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
                
                setTimeout(() => {
                    letterContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    }
    
    const playMusicBtn = document.getElementById('playMusicBtn');
    const musicPreview = document.getElementById('musicPreview');
    const musicPlayer = document.getElementById('musicPlayer');
    
    if (playMusicBtn && musicPreview && musicPlayer) {
        playMusicBtn.addEventListener('click', () => {
            musicPreview.classList.add('hidden');
            musicPlayer.classList.remove('hidden');
        });
    }
    
    const unlockBtn = document.getElementById('unlockBtn');
    const secretInput = document.getElementById('secretInput');
    const secretLock = document.getElementById('secretLock');
    const secretReveal = document.getElementById('secretReveal');
    
    if (unlockBtn && secretInput) {
        unlockBtn.addEventListener('click', () => {
            checkPassword(secretInput, secretLock, secretReveal);
        });
        
        secretInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword(secretInput, secretLock, secretReveal);
            }
        });
    }
}

function switchTheme() {
    const body = document.body;
    body.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    body.classList.add(themes[currentThemeIndex]);
}

/* ============================================ */
/* TIMER */
/* ============================================ */

function updateTimer() {
    const now = new Date();
    const diff = now - RELATIONSHIP_START;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const daysEl = document.getElementById('daysSince');
    const hoursEl = document.getElementById('hoursSince');
    const minutesEl = document.getElementById('minutesSince');
    
    if (daysEl) daysEl.textContent = days.toLocaleString();
    if (hoursEl) hoursEl.textContent = hours.toLocaleString();
    if (minutesEl) minutesEl.textContent = minutes.toLocaleString();
}

/* ============================================ */
/* CAROUSEL */
/* ============================================ */

let currentSlide = 0;
const totalSlides = 4;

function initCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('indicators');
    
    if (indicators) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'indicator';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            indicators.appendChild(dot);
        }
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    initSwipe();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.querySelectorAll('.indicator');
    
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function initSwipe() {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!wrapper) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }
}

/* ============================================ */
/* REASONS */
/* ============================================ */

let usedReasons = [];

function initReasons() {
    const reasonBtn = document.getElementById('newReasonBtn');
    
    if (reasonBtn) {
        reasonBtn.addEventListener('click', (e) => {
            showRandomReason();
            
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            popHearts(x, y, 15);
        });
    }
}

function showRandomReason() {
    const reasonText = document.getElementById('reasonText');
    if (!reasonText) return;
    
    if (usedReasons.length === REASONS.length) {
        usedReasons = [];
    }
    
    const availableReasons = REASONS.filter((_, index) => !usedReasons.includes(index));
    const randomIndex = Math.floor(Math.random() * availableReasons.length);
    const selectedReason = availableReasons[randomIndex];
    const originalIndex = REASONS.indexOf(selectedReason);
    
    usedReasons.push(originalIndex);
    
    reasonText.classList.add('animate');
    reasonText.textContent = selectedReason;
    
    setTimeout(() => {
        reasonText.classList.remove('animate');
    }, 600);
}

/* ============================================ */
/* SECRET */
/* ============================================ */

function checkPassword(input, lockDiv, revealDiv) {
    const value = input.value.trim().toLowerCase();
    
    if (value === PASSWORD.toLowerCase()) {
        lockDiv.classList.add('hidden');
        revealDiv.classList.remove('hidden');
        
        setTimeout(() => {
            revealDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
        
        popHearts(window.innerWidth / 2, window.innerHeight / 2, 40);
    } else {
        input.classList.add('shake');
        input.value = '';
        
        setTimeout(() => {
            input.classList.remove('shake');
        }, 600);
        
        const rect = input.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        popHearts(x, y, 10);
    }
}

/* ============================================ */
/* HEARTS */
/* ============================================ */

function spawnHeart(x, y) {
    const heartsLayer = document.getElementById('heartsLayer');
    if (!heartsLayer) return;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
    
    heartsLayer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1600);
}

function popHearts(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 120;
            const offsetY = (Math.random() - 0.5) * 120;
            spawnHeart(x + offsetX, y + offsetY);
        }, i * 40);
    }
}

/* ============================================ */
/* BODY HEARTS */
/* ============================================ */

function initBodyHearts() {
    document.body.addEventListener('click', (e) => {
        const tagName = e.target.tagName.toLowerCase();
        const isInteractive = ['button', 'input', 'a', 'img'].includes(tagName);
        const hasParentButton = e.target.closest('button, input, a');
        
        if (!isInteractive && !hasParentButton) {
            popHearts(e.clientX, e.clientY, 12);
        }
    });
}

/* ============================================ */
/* SCROLL REVEAL */
/* ============================================ */

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                const rect = entry.target.getBoundingClientRect();
                popHearts(rect.left + rect.width / 2, rect.top + 100, 8);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}
