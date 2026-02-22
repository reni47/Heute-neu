/* ============================================ */
/* PERSONALISIERUNG - HIER ÄNDERN */
/* ============================================ */

// Passwort für den Geheim-Bereich
const PASSWORD = "liebe"; // Ändere das Passwort hier

// Gründe warum du Myra liebst (6-10 Einträge)
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

// Beziehungsbeginn (29.12.2022 00:00:00)
const RELATIONSHIP_START = new Date('2022-12-29T00:00:00');

/* ============================================ */
/* CINEMATIC TRAILER SEQUENCE */
/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Trailer aktivieren
    startTrailer();
    
    // Skip-Button
    const skipBtn = document.querySelector('.skip-trailer');
    if (skipBtn) {
        skipBtn.addEventListener('click', endTrailer);
    }
});

function startTrailer() {
    const trailer = document.getElementById('trailer');
    const mainContent = document.getElementById('mainContent');
    
    // Particles generieren
    createParticles();
    
    // Herz-Regen starten
    startHeartRain();
    
    // Trailer-Sequenz (Extended & Professional)
    // Stage 1: DILEMIN Glitch Text
    setTimeout(() => showStage('stage-1'), 500);
    
    // Stage 2: Doors Opening
    setTimeout(() => showStage('stage-2'), 4000);
    
    // Stage 3: MacBook Reveal mit "Für Myra"
    setTimeout(() => showStage('stage-3'), 7000);
    
    // Stage 4: Vortex Zoom
    setTimeout(() => showStage('stage-4'), 12000);
    
    // Stage 5: Final Reveal "Frohen Valentinstag Myra"
    setTimeout(() => showStage('stage-5'), 14000);
    
    // Ende & Website laden
    setTimeout(() => endTrailer(), 17000);
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
    const mainContent = document.getElementById('mainContent');

    // Trailer ausblenden
    trailer.style.opacity = '0';
    setTimeout(() => {
        trailer.style.display = 'none';

        // Nach dem Intro zuerst die Frage zeigen
        const vq = document.getElementById('valentineQuestion');
        if (vq) {
            showValentineQuestion();
        } else {
            // Fallback: direkt zur Seite
            mainContent.classList.remove('hidden');
            initMainContent();
            startRainBurst(3500, 45);
        }
    }, 1000);
}

function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 8) + 's';
        container.appendChild(particle);
    }
}

function startHeartRain() {
    const container = document.querySelector('.heart-rain-container');
    if (!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-drop';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(heart);
        
        // Remove nach Animation
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 80);
}

/* ============================================ */
/* VALENTINE QUESTION (NACH DEM INTRO) */
/* ============================================ */

let _valentineHandlersAttached = false;

function showValentineQuestion() {
    const vq = document.getElementById('valentineQuestion');
    const mainContent = document.getElementById('mainContent');
    if (!vq || !mainContent) return;

    // Seite noch versteckt lassen, zuerst die Frage
    mainContent.classList.add('hidden');
    vq.classList.remove('hidden');

    if (!_valentineHandlersAttached) {
        initValentineQuestion();
        _valentineHandlersAttached = true;
    }
}

function initValentineQuestion() {
    const vq = document.getElementById('valentineQuestion');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const mainContent = document.getElementById('mainContent');

    if (!vq || !yesBtn || !noBtn || !mainContent) return;

    let growthTimer = null;
    let scale = 1;
    let escapes = 0;
    const maxEscapesBeforeAllow = 5;

    // Wachstum nach 0.5s (stückweise größer)
    setTimeout(() => {
        growthTimer = setInterval(() => {
            scale = Math.min(scale + 0.05, 7);
            yesBtn.style.transform = `scale(${scale})`;
            yesBtn.style.zIndex = '9999';
        }, 90);
    }, 500);

    function moveButtonRandom(btn) {
        const pad = 30;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const rect = btn.getBoundingClientRect();

        const x = Math.max(pad, Math.min(vw - rect.width - pad, Math.random() * (vw - rect.width)));
        const y = Math.max(pad, Math.min(vh - rect.height - pad, Math.random() * (vh - rect.height)));

        btn.style.position = 'fixed';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    }

    function escapeYes() {
        escapes += 1;

        // "im Hintergrund kleiner werden" -> kurz kleiner, dann weiter wachsen
        scale = Math.max(1, scale * 0.85);
        yesBtn.style.transform = `scale(${scale})`;

        moveButtonRandom(yesBtn);
        popHearts(window.innerWidth / 2, window.innerHeight / 2, 10);
    }

    // Ja-Button "haut ab", wenn man ihn fangen will
    const escapeHandler = (e) => {
        if (escapes < maxEscapesBeforeAllow) {
            e.preventDefault();
            escapeYes();
        }
    };

    yesBtn.addEventListener('mouseenter', escapeHandler);
    yesBtn.addEventListener('touchstart', escapeHandler, { passive: false });

    // NO: immer wegspringen
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveButtonRandom(noBtn);
        popHearts(e.clientX, e.clientY, 14);
        startRainBurst(1800, 25);
    });

    // YES: nach ein paar "Fluchten" zulassen
    yesBtn.addEventListener('click', (e) => {
        if (escapes < maxEscapesBeforeAllow) {
            e.preventDefault();
            escapeYes();
            return;
        }

        // Stop Wachstum
        if (growthTimer) clearInterval(growthTimer);

        // Celebration Screen
        if (celebration) {
            celebration.classList.remove('hidden');
            startCanvasConfetti(3000);
        }

        // Nach kurzer Zeit zur Website
        setTimeout(() => {
            vq.classList.add('hidden');
            mainContent.classList.remove('hidden');
            initMainContent();

            // Sehr viel Herz + Konfetti Regen zum Start
            startRainBurst(4500, 70);
        }, 2300);
    });
}

/* ============================================ */
/* RAIN: HERZEN + KONFETTI (MAIN SITE) */
/* ============================================ */

function startRainBurst(durationMs = 2500, intensity = 40) {
    const layer = document.getElementById('rainLayer');
    if (!layer) return;

    const emojis = ['❤️','💖','💗','💕','💘','🎊','🎉','✨','💝'];

    const interval = Math.max(10, Math.floor(1000 / intensity));
    const timer = setInterval(() => {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.fontSize = (Math.random() * 18 + 18) + 'px';
        drop.style.animationDuration = (Math.random() * 1.8 + 2.2) + 's';
        drop.style.opacity = (Math.random() * 0.35 + 0.65).toString();

        layer.appendChild(drop);

        setTimeout(() => drop.remove(), 5000);
    }, interval);

    setTimeout(() => clearInterval(timer), durationMs);
}

/* ============================================ */
/* CANVAS CONFETTI (für Celebration Screen) */
/* ============================================ */

function startCanvasConfetti(durationMs = 2500) {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pieces = [];
    const count = 180;

    for (let i = 0; i < count; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            w: Math.random() * 10 + 4,
            h: Math.random() * 16 + 6,
            vy: Math.random() * 4 + 3,
            vx: (Math.random() - 0.5) * 2,
            r: Math.random() * Math.PI
        });
    }

    const start = performance.now();

    function draw(t) {
        const elapsed = t - start;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const p of pieces) {
            p.x += p.vx;
            p.y += p.vy;
            p.r += 0.08;

            if (p.y > canvas.height + 40) {
                p.y = -40;
                p.x = Math.random() * canvas.width;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.r);
            // keine festen Farben -> einfach weiß/rosa via alpha, wirkt wie Konfetti-Glitzer
            ctx.fillStyle = `rgba(255, 77, 109, ${Math.random() * 0.6 + 0.2})`;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }

        if (elapsed < durationMs) {
            requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            window.removeEventListener('resize', resize);
        }
    }

    requestAnimationFrame(draw);
}

/* ============================================ */
/* MAIN CONTENT INITIALIZATION */
/* ============================================ */

function initMainContent() {
    // Timer starten
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Scroll-Reveal
    initScrollReveal();
    
    // Event Listeners
    initEventListeners();
    
    // Carousel
    initCarousel();
    
    // Reasons
    initReasons();
    
    // Body Click für Herzen
    initBodyHearts();
}

/* ============================================ */
/* THEME SWITCHER */
/* ============================================ */

const themes = ['theme-night', 'theme-default', 'theme-rose'];
let currentThemeIndex = 0; // Start mit Night Theme // Start mit Night Theme

function initEventListeners() {
    // Theme Button
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            switchTheme();
            popHearts(e.clientX, e.clientY, 20);
        });
    }
    
    // Main Heart Button
    const mainHeartBtn = document.getElementById('mainHeartBtn');
    if (mainHeartBtn) {
        mainHeartBtn.addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            popHearts(x, y, 30);
            startRainBurst(3000, 55);
        });
    }
    
    // Scroll to Gallery Button
    const scrollGalleryBtn = document.getElementById('scrollGalleryBtn');
    if (scrollGalleryBtn) {
        scrollGalleryBtn.addEventListener('click', () => {
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Letter/Envelope
    const seal = document.getElementById('seal');
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    
    if (seal && envelope && letterContent) {
        seal.addEventListener('click', () => {
            envelope.classList.toggle('opened');
            letterContent.classList.toggle('show');
            letterContent.classList.toggle('hidden');
            
            if (letterContent.classList.contains('show')) {
                // Herz-Explosion beim Öffnen
                const rect = seal.getBoundingClientRect();
                popHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
                
                setTimeout(() => {
                    letterContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    }
    
    // Music Player
    const playMusicBtn = document.getElementById('playMusicBtn');
    const musicPreview = document.getElementById('musicPreview');
    const musicPlayer = document.getElementById('musicPlayer');
    
    if (playMusicBtn && musicPreview && musicPlayer) {
        playMusicBtn.addEventListener('click', () => {
            musicPreview.classList.add('hidden');
            musicPlayer.classList.remove('hidden');
        });
    }
    
    // Secret Unlock
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
    
    // Remove current theme
    body.classList.remove(themes[currentThemeIndex]);
    
    // Next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    body.classList.add(themes[currentThemeIndex]);
}

/* ============================================ */
/* TIMER / BEZIEHUNGSDAUER */
/* ============================================ */

function updateTimer() {
    const now = new Date();
    const diff = now - RELATIONSHIP_START;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById('daysSince');
    const hoursEl = document.getElementById('hoursSince');
    const minutesEl = document.getElementById('minutesSince');
    const secondsEl = document.getElementById('secondsSince');
    
    if (daysEl) daysEl.textContent = days.toLocaleString();
    if (hoursEl) hoursEl.textContent = hours.toLocaleString();
    if (minutesEl) minutesEl.textContent = minutes.toLocaleString();
    if (secondsEl) secondsEl.textContent = seconds.toLocaleString();
}

/* ============================================ */
/* CAROUSEL / GALLERY */
/* ============================================ */

let currentSlide = 0;
const totalSlides = 4;

function initCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('indicators');
    
    // Create indicators
    if (indicators) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'indicator';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            indicators.appendChild(dot);
        }
    }
    
    // Buttons
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Touch/Swipe
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

// Swipe Gestures für Mobile
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
/* RANDOM REASONS */
/* ============================================ */

let usedReasons = [];

function initReasons() {
    const reasonBtn = document.getElementById('newReasonBtn');
    
    if (reasonBtn) {
        reasonBtn.addEventListener('click', (e) => {
            showRandomReason();
            
            // Herzen am Button
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
    
    // Alle Gründe benutzt? Reset
    if (usedReasons.length === REASONS.length) {
        usedReasons = [];
    }
    
    // Verfügbare Gründe
    const availableReasons = REASONS.filter((_, index) => !usedReasons.includes(index));
    
    // Random wählen
    const randomIndex = Math.floor(Math.random() * availableReasons.length);
    const selectedReason = availableReasons[randomIndex];
    const originalIndex = REASONS.indexOf(selectedReason);
    
    usedReasons.push(originalIndex);
    
    // Animieren
    reasonText.classList.add('animate');
    reasonText.textContent = selectedReason;
    
    setTimeout(() => {
        reasonText.classList.remove('animate');
    }, 600);
}

/* ============================================ */
/* SECRET PASSWORD */
/* ============================================ */

function checkPassword(input, lockDiv, revealDiv) {
    const value = input.value.trim().toLowerCase();
    
    if (value === PASSWORD.toLowerCase()) {
        // Correct!
        lockDiv.classList.add('hidden');
        revealDiv.classList.remove('hidden');
        
        setTimeout(() => {
            revealDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
        
        // Massive Herz-Explosion
        popHearts(window.innerWidth / 2, window.innerHeight / 2, 40);
    } else {
        // Wrong!
        input.classList.add('shake');
        input.value = '';
        
        setTimeout(() => {
            input.classList.remove('shake');
        }, 600);
        
        // Kleine Herzen
        const rect = input.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        popHearts(x, y, 10);
    }
}

/* ============================================ */
/* HEARTS ANIMATIONS */
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
    
    // Remove nach Animation
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
/* BODY CLICK HEARTS */
/* ============================================ */

function initBodyHearts() {
    document.body.addEventListener('click', (e) => {
        // Überall kleine Herzen (auch auf Buttons usw.)
        popHearts(e.clientX, e.clientY, 8);
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
                
                // Herzen bei Reveal (optional)
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

/* ============================================ */
/* ANFÄNGER-HINWEISE */
/* ============================================ */

/*
📝 PERSONALISIERUNG FÜR MYRA "DILEMIN":

1. PASSWORT (Zeile 7):
   const PASSWORD = "liebe"; 
   -> Ändere zu deinem geheimen Wort

2. GRÜNDE (Zeile 10-22):
   -> Angepasst für Myra/Dilemin
   -> Schreibe eigene Gründe

3. BILDUNTERSCHRIFTEN:
   -> In index.html bei <figcaption>
   
4. LIEBESBRIEF-TEXT:
   -> In index.html im <div class="letter-paper">
   
5. GEHEIME NACHRICHT:
   -> In index.html im <div class="secret-reveal">
   
6. MUSIK (Spotify/YouTube):
   -> In index.html beim <iframe>

🎬 TRAILER-EFFEKTE:
   - DILEMIN Glitch-Text
   - Türen mit Patterns
   - Realistischer MacBook Pro
   - Herz-Regen durchgehend
   - Vortex-Zoom
   - "Für Myra" Final Reveal
   
🌙 STANDARD: Dark Theme (Schwarz/Rot)
   -> Wechsel mit 🎨 Button

❤️ HERZ-EFFEKTE ÜBERALL:
   - Klick auf leere Flächen
   - Alle Buttons
   - Section Reveals
   - Passwort unlock

📁 BILDER HOCHLADEN:
   - Ordner "img" erstellen
   - hero.jpg, 1.jpg, 2.jpg, 3.jpg, 4.jpg
   
🚀 GITHUB PAGES:
   1. Repository erstellen
   2. Dateien hochladen
   3. Settings > Pages > main branch
   4. Fertig!
   
💝 VIEL SPAẞ, DILEMIN!
*/

/* ============================================ */
/* EXTRA SPARKLES FÜR TRAILER */
/* ============================================ */

function createSparkles() {
    const container = document.querySelector('.door-sparkles');
    if (!container) return;
    
    // 80 Sparkles für massiven Effekt
    for (let i = 0; i < 80; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
        sparkle.style.setProperty('--ty', (Math.random() - 0.5) * 300 + 'px');
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(sparkle);
    }
}

// Sparkles beim Trailer-Start hinzufügen
setTimeout(() => {
    createSparkles();
}, 2000);
