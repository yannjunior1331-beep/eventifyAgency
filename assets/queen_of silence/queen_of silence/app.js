/**
 * THE QUEEN OF SILENCE — EVENTIFY CSR INITIATIVE
 * High-Fashion Editorial Interaction & House of Honey Reference Slideshow
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let lenis = null;

  /* ==========================================================================
     1. FULL-BLEED EDITORIAL CURTAIN SLIDESHOW (EXACT REFERENCE ENGINE)
     ========================================================================== */
  const dioramaSlider = document.getElementById('dioramaSlider');
  const slides = Array.from(document.querySelectorAll('.diorama-slide'));
  const progressBar = document.getElementById('heroProgress');

  if (dioramaSlider && slides.length > 0) {
    let currentIndex = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;
    let timerId = null;
    let progressStartTime = 0;
    let progressRaf = null;

    // Mathematical parameters reverse-engineered from reference site (House of Honey)
    const INTERVAL = 4200; // ms between slide transitions
    const DURATION = 1900; // ms transition duration
    const EASING = 'cubic-bezier(0.79, 0.14, 0.15, 0.86)'; // Exact reference bezier curve
    
    // Transform parameters
    const OUTGOING_TRANSFORM = 'translate3d(-2.4%, 0, 0) scale(0.958) rotate(-0.35deg)';
    const INCOMING_START_TRANSFORM = 'scale(1.072) rotate(0.45deg)';

    // Initial setup for slides
    slides.forEach((slide, idx) => {
      const inner = slide.querySelector('.slide-inner');
      if (idx === 0) {
        slide.style.zIndex = '1';
        slide.style.clipPath = 'inset(0 0 0 0%)';
        slide.style.opacity = '1';
        if (inner) {
          inner.style.transform = 'scale(1) rotate(0deg)';
          inner.style.transformOrigin = 'center center';
        }
      } else {
        slide.style.zIndex = '0';
        slide.style.clipPath = 'inset(0 0 0 100%)';
        slide.style.opacity = '1';
        if (inner) {
          inner.style.transform = INCOMING_START_TRANSFORM;
          inner.style.transformOrigin = 'left center';
        }
      }
    });

    // Create progress bar indicator line if not present
    let innerProgressBar = progressBar ? progressBar.querySelector('.hero-accent-progress-bar') : null;
    if (progressBar && !innerProgressBar) {
      innerProgressBar = document.createElement('div');
      innerProgressBar.className = 'hero-accent-progress-bar';
      progressBar.appendChild(innerProgressBar);
    }

    function runProgressBar(timestamp) {
      if (!progressStartTime) progressStartTime = timestamp;
      const elapsed = timestamp - progressStartTime;
      const progress = Math.min(elapsed / INTERVAL, 1);
      
      if (innerProgressBar) {
        innerProgressBar.style.width = `${progress * 100}%`;
      }

      if (progress < 1) {
        progressRaf = requestAnimationFrame(runProgressBar);
      }
    }

    function resetProgressBar() {
      if (progressRaf) {
        cancelAnimationFrame(progressRaf);
        progressRaf = null;
      }
      progressStartTime = 0;
      if (innerProgressBar) {
        innerProgressBar.style.width = '0%';
      }
      progressRaf = requestAnimationFrame(runProgressBar);
    }

    function transitionToNext() {
      if (isTransitioning || document.hidden) return;
      isTransitioning = true;

      const currSlide = slides[currentIndex];
      const nextIndex = (currentIndex + 1) % totalSlides;
      const nextSlide = slides[nextIndex];

      const currInner = currSlide.querySelector('.slide-inner');
      const nextInner = nextSlide.querySelector('.slide-inner');

      // 1. Prepare Next Slide at right edge, scaled up
      nextSlide.style.transition = 'none';
      nextSlide.style.zIndex = '2';
      nextSlide.style.clipPath = 'inset(0 0 0 100%)';
      nextSlide.style.opacity = '1';

      if (nextInner) {
        nextInner.style.transition = 'none';
        nextInner.style.transformOrigin = 'left center';
        nextInner.style.transform = INCOMING_START_TRANSFORM;
      }

      // Force reflow
      void nextSlide.offsetWidth;

      // 2. Animate Outgoing Slide (slight pull-back, scale down, tilt)
      if (currInner) {
        currInner.style.transition = `transform ${DURATION}ms ${EASING}`;
        currInner.style.transformOrigin = 'center center';
        currInner.style.transform = OUTGOING_TRANSFORM;
      }

      // 3. Animate Incoming Slide (curtain wipe reveal + settle scale)
      nextSlide.style.transition = `clip-path ${DURATION}ms ${EASING}`;
      nextSlide.style.clipPath = 'inset(0 0 0 0%)';

      if (nextInner) {
        nextInner.style.transition = `transform ${DURATION}ms ${EASING}`;
        nextInner.style.transform = 'scale(1) rotate(0deg)';
      }

      // Reset bottom progress bar
      resetProgressBar();

      // 4. On transition completion
      setTimeout(() => {
        // Reset old slide
        currSlide.style.zIndex = '0';
        currSlide.style.transition = 'none';
        currSlide.style.clipPath = 'inset(0 0 0 100%)';
        if (currInner) {
          currInner.style.transition = 'none';
          currInner.style.transform = INCOMING_START_TRANSFORM;
          currInner.style.transformOrigin = 'left center';
        }

        // Lock new slide as current base
        nextSlide.style.zIndex = '1';
        nextSlide.style.transition = 'none';

        currentIndex = nextIndex;
        isTransitioning = false;
      }, DURATION);
    }

    function startSlideshow() {
      stopSlideshow();
      resetProgressBar();
      timerId = setInterval(() => {
        transitionToNext();
      }, INTERVAL + DURATION);
    }

    function stopSlideshow() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
      if (progressRaf) {
        cancelAnimationFrame(progressRaf);
        progressRaf = null;
      }
    }

    // Handle tab visibility (pause when backgrounded, resume when active)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopSlideshow();
      } else {
        startSlideshow();
      }
    });

    // Start auto loop
    startSlideshow();
  }

  /* ==========================================================================
     2. EDITORIAL 3D TILT EFFECT FOR STACKED IMAGES
     ========================================================================== */
  const stackContainers = document.querySelectorAll('.stacked-images-container');

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    stackContainers.forEach(container => {
      const front = container.querySelector('.layer-front');
      const back = container.querySelector('.layer-back');

      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltY = (x / rect.width) * 6;

        if (front) {
          front.style.transform = `translate(${x * 0.035}px, ${y * 0.035}px) rotate(${tiltY * 0.18}deg)`;
        }
        if (back) {
          back.style.transform = `translate(${x * -0.018}px, ${y * -0.018}px)`;
        }
      });

      container.addEventListener('mouseleave', () => {
        if (front) front.style.transform = '';
        if (back) back.style.transform = '';
      });
    });
  }

  /* ==========================================================================
     3. INTERACTIVE ENGAGEMENT MODAL
     ========================================================================== */
  const modal = document.getElementById('actionModal');
  const modalClose = document.getElementById('modalClose');
  const supportForm = document.getElementById('supportForm');
  const formFeedback = document.getElementById('formFeedback');

  const triggerButtons = document.querySelectorAll(
    '#rejoindreBtn, #actionFooterBtn'
  );

  function openModal(context = '') {
    if (!modal) return;
    lenis?.stop();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const modalTitle = modal.querySelector('.modal-title');
    if (context === 'guide' && modalTitle) {
      modalTitle.textContent = 'Télécharger le Guide RSE — The Queen of Silence';
    } else if (modalTitle) {
      modalTitle.textContent = 'Rejoindre The Queen of Silence';
    }

    const firstInput = document.getElementById('formName');
    setTimeout(() => firstInput?.focus(), 100);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lenis?.start();
    if (formFeedback) {
      formFeedback.innerHTML = '';
      formFeedback.className = 'form-feedback';
    }
  }

  triggerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isGuide = btn.id === 'downloadGuideBtn';
      openModal(isGuide ? 'guide' : 'action');
    });
  });

  modalClose?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });

  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitFormBtn');
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();

      if (!name || !email) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Veuillez renseigner tous les champs obligatoires.';
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Envoi en cours...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'CONFIRMER MON ENGAGEMENT →';
        }
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <strong>Merci infiniment ${name} !</strong><br>
            Votre engagement est précieux. L'équipe Eventify reviendra vers vous très rapidement.
          `;
        }
        supportForm.reset();

        setTimeout(() => {
          closeModal();
        }, 4000);
      }, 800);
    });
  }

  /* ==========================================================================
     4. EDITORIAL SCROLL REVEAL
     ========================================================================== */
  const revealElements = document.querySelectorAll(
    '.statement-main, .statement-sub, .mission-item-card, .footer-callout, .footer-cta-row'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.8s var(--trans-smooth), transform 0.8s var(--trans-smooth)';
    revealObserver.observe(el);
  });

  /* ==========================================================================
     5. TRAILING CURSOR FOLLOWER (House of Honey Eased Spring Trail Motif)
     ========================================================================== */
  const cursorFollower = document.getElementById('cursorFollower');

  if (cursorFollower && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let vx = 0;
    let vy = 0;
    let isVisible = false;
    let isHovering = false;
    let angle = 0;
    let currentScale = 1;

    // Easing coefficient (0.12 provides the signature fluid trailing delay)
    const EASE = 0.12;
    // Trailing offset so follower stays close without covering the cursor pointer
    const OFFSET_X = 14;
    const OFFSET_Y = 16;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX + OFFSET_X;
      mouseY = e.clientY + OFFSET_Y;

      if (!isVisible) {
        isVisible = true;
        currentX = mouseX;
        currentY = mouseY;
        cursorFollower.classList.add('is-active');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorFollower.classList.remove('is-active');
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursorFollower.classList.add('is-active');
    });

    // Interactive element hover detection
    const interactiveSelector = 'a, button, input, select, textarea, [role="button"], .mission-item-card, .check-item';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) {
        isHovering = true;
        cursorFollower.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) {
        isHovering = false;
        cursorFollower.classList.remove('is-hovering');
      }
    });

    function renderFollower(timestamp) {
      if (isVisible) {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        currentX += dx * EASE;
        currentY += dy * EASE;

        vx = dx * EASE;
        vy = dy * EASE;

        // Velocity-based tilt (clamped between -22deg and +22deg)
        const targetAngle = Math.max(Math.min(vx * 1.6, 22), -22);
        angle += (targetAngle - angle) * 0.12;

        // Subtle organic floating flutter
        const floatY = Math.sin(timestamp * 0.0035) * 2.2;
        const targetScale = isHovering ? 1.2 : 1;
        currentScale += (targetScale - currentScale) * 0.12;

        cursorFollower.style.transform = `translate3d(${currentX.toFixed(2)}px, ${(currentY + floatY).toFixed(2)}px, 0) rotate(${angle.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;
      }

      requestAnimationFrame(renderFollower);
    }

    requestAnimationFrame(renderFollower);
  }

  /* ==========================================================================
     6. EDITORIAL SCROLL ENGINE (Lenis Smooth Scroll + House of Honey Parallax)
     ========================================================================== */
  const masthead = document.querySelector('.masthead');
  const mastheadTitle = document.querySelector('.masthead-title');
  const mastheadSubRow = document.querySelector('.masthead-sub-row');
  const dioramaSliderEl = document.getElementById('dioramaSlider');
  const statementSection = document.getElementById('definition');
  const statementWatermark = statementSection?.querySelector('.watermark-bg');
  const stackedContainers = document.querySelectorAll('.stacked-images-container');
  const footerSection = document.getElementById('guide');
  const footerArch = footerSection?.querySelector('.footer-arch-graphic');
  const footerWatermark = footerSection?.querySelector('.footer-watermark');

  function onScrollFrame(currentScrollY) {
    const scrollY = typeof currentScrollY === 'number'
      ? currentScrollY
      : (window.pageYOffset || document.documentElement.scrollTop);
    const vh = window.innerHeight;
    const isMobile = window.innerWidth <= 768;

    // 1. Transition between Hero Title (Masthead) and Hero Image (Diorama Slider)
    if (masthead && scrollY < vh * 1.3) {
      const titleParallaxY = scrollY * (isMobile ? 0.16 : 0.28);
      const titleFadeThreshold = isMobile ? 220 : 340;
      const subFadeThreshold = isMobile ? 140 : 200;
      const titleOpacity = Math.max(0, 1 - (scrollY / titleFadeThreshold));
      const titleScale = Math.max(0.95, 1 - (scrollY * 0.00015));

      if (mastheadTitle) {
        mastheadTitle.style.transform = `translate3d(0, ${titleParallaxY.toFixed(1)}px, 0) scale(${titleScale.toFixed(4)})`;
        mastheadTitle.style.opacity = titleOpacity.toFixed(3);
      }

      if (mastheadSubRow) {
        const subParallaxY = scrollY * (isMobile ? 0.09 : 0.16);
        const subOpacity = Math.max(0, 1 - (scrollY / subFadeThreshold));
        mastheadSubRow.style.transform = `translate3d(0, ${subParallaxY.toFixed(1)}px, 0)`;
        mastheadSubRow.style.opacity = subOpacity.toFixed(3);
      }
    }

    // 2. Diorama Slider Active Image Parallax (Window into the scene)
    if (dioramaSliderEl) {
      const sliderRect = dioramaSliderEl.getBoundingClientRect();
      if (sliderRect.bottom > 0 && sliderRect.top < vh) {
        const sliderProgress = (vh - sliderRect.top) / (vh + sliderRect.height);
        const activeImg = dioramaSliderEl.querySelector('.diorama-slide.is-current .diorama-img');
        if (activeImg) {
          const imgParallaxY = (sliderProgress - 0.5) * (isMobile ? 30 : 60);
          activeImg.style.transform = `translate(-50%, calc(-50% + ${imgParallaxY.toFixed(1)}px))`;
        }
      }
    }

    // 3. Statement Section (Manifesto) Watermark Horizontal Drift
    if (statementSection && statementWatermark && !isMobile) {
      const stmtRect = statementSection.getBoundingClientRect();
      if (stmtRect.bottom > 0 && stmtRect.top < vh) {
        const stmtProgress = (vh - stmtRect.top) / (vh + stmtRect.height);
        const driftX = (stmtProgress - 0.5) * 120;
        statementWatermark.style.transform = `translate3d(calc(-50% + ${driftX.toFixed(1)}px), -50%, 0)`;
      }
    }

    // 4. Missions Stacked Photo Collagen Multiplane Parallax
    stackedContainers.forEach(container => {
      const rect = container.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < vh) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const backImg = container.querySelector('.layer-back .stack-img');
        const frontImg = container.querySelector('.layer-front .stack-img');
        const parallaxMultiplier = isMobile ? 0.3 : 1;

        if (backImg) {
          const backY = (progress - 0.5) * 50 * parallaxMultiplier;
          backImg.style.transform = `translate3d(0, ${backY.toFixed(1)}px, 0)`;
        }
        if (frontImg) {
          const frontY = (progress - 0.5) * -45 * parallaxMultiplier;
          frontImg.style.transform = `translate3d(0, ${frontY.toFixed(1)}px, 0)`;
        }
      }
    });

    // 5. Architectural Footer Parallax
    if (footerSection && !isMobile) {
      const footRect = footerSection.getBoundingClientRect();
      if (footRect.bottom > 0 && footRect.top < vh) {
        const footProgress = (vh - footRect.top) / (vh + footRect.height);
        if (footerArch) {
          const archY = (footProgress - 0.5) * 35;
          footerArch.style.transform = `translate3d(0, ${archY.toFixed(1)}px, 0)`;
        }
        if (footerWatermark) {
          const wmX = (footProgress - 0.5) * 45;
          footerWatermark.style.transform = `translate3d(${wmX.toFixed(1)}px, 0, 0)`;
        }
      }
    }
  }

  // Initialize Lenis Smooth Scroll Engine
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential luxury ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      infinite: false,
    });

    // Connect Lenis frame to our parallax engine
    lenis.on('scroll', (e) => {
      onScrollFrame(e.scroll);
    });

    function lenisRaf(time) {
      lenis.raf(time);
      requestAnimationFrame(lenisRaf);
    }
    requestAnimationFrame(lenisRaf);

    // Smooth anchor navigation with Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href === '#!') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: 0, duration: 1.35 });
        }
      });
    });
  } else {
    // Native scroll fallback
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          onScrollFrame();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  // Initial calculation on page load
  onScrollFrame();
});
