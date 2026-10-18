/**
 * EVENTIFY AGENCY — LUXURY SMOOTH SCROLL ENGINE (LENIS INTEGRATION)
 * Provides silky, momentum-based inertial scrolling across the website.
 * Integrates cleanly with Webflow IX2, GSAP ScrollTrigger, and anchor links.
 */

(function () {
  'use strict';

  // Check for prefers-reduced-motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'smooth';
    return;
  }

  function resolveScriptPath(fileName) {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      const src = scripts[i].src || '';
      if (src.includes('smooth-scroll.js')) {
        return src.replace(/smooth-scroll\.js(\?.*)?$/, fileName);
      }
      if (src.includes('i18n.js')) {
        return src.replace(/i18n\.js(\?.*)?$/, fileName);
      }
    }
    return 'assets/js/' + fileName;
  }

  function startSmoothScroll() {
    if (typeof Lenis === 'undefined') return;

    // Avoid duplicate initialization
    if (window.lenis && typeof window.lenis.destroy === 'function') {
      window.lenis.destroy();
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential luxury ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.25,
      infinite: false,
      autoResize: true
    });

    window.lenis = lenis;

    // Connect with GSAP ScrollTrigger if present (e.g. Prix Ramses)
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      let rafId;
      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    // Connect with Webflow Interactions (IX2)
    lenis.on('scroll', () => {
      window.dispatchEvent(new Event('scroll'));
    });

    // Smooth anchor navigation for all hash links (#section, #contact, etc.)
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;

      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = 70; // typical fixed nav height
          lenis.scrollTo(target, {
            offset: -navHeight,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      } catch (err) {
        // Selector might be invalid or not found
      }
    });

    // Recalculate dimensions on window load and after Webflow loads
    window.addEventListener('load', () => {
      lenis.resize();
    });

    if (window.Webflow) {
      window.Webflow.push(() => {
        lenis.resize();
      });
    }

    // Expose utility to window
    window.EventifySmoothScroll = {
      lenis: lenis,
      scrollTo: (target, options) => lenis.scrollTo(target, options),
      stop: () => lenis.stop(),
      start: () => lenis.start()
    };
  }

  // Load Lenis library if not already present, then initialize
  if (typeof Lenis !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startSmoothScroll);
    } else {
      startSmoothScroll();
    }
  } else {
    const lenisPath = resolveScriptPath('lenis.min.js');
    const script = document.createElement('script');
    script.src = lenisPath;
    script.async = false;
    script.onload = () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startSmoothScroll);
      } else {
        startSmoothScroll();
      }
    };
    script.onerror = () => {
      console.warn('Eventify Smooth Scroll: Could not load lenis.min.js from', lenisPath);
    };
    document.head.appendChild(script);
  }

  // =========================================================================
  // UNIVERSAL PROOF GALLERY LIGHTBOX INITIALIZER
  // =========================================================================
  function initProofGalleryLightbox() {
    var galleryImgs = document.querySelectorAll('.proof-media-wrapper img, .proof-card img');
    if (!galleryImgs || galleryImgs.length === 0) return;

    // Create lightbox element if not existing
    var lb = document.getElementById('eventifyProofLightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'eventifyProofLightbox';
      lb.className = 'eventify-proof-lightbox';
      lb.innerHTML = 
        '<div class="eventify-proof-lightbox-close" aria-label="Fermer">&times;</div>' +
        '<div class="eventify-proof-lightbox-nav prev" aria-label="Précédent">&#10094;</div>' +
        '<div class="eventify-proof-lightbox-nav next" aria-label="Suivant">&#10095;</div>' +
        '<div class="eventify-proof-lightbox-content">' +
          '<img id="eventifyProofLightboxImg" src="" alt="Agrandissement">' +
        '</div>' +
        '<div class="eventify-proof-lightbox-counter" id="eventifyProofLightboxCounter"></div>';
      document.body.appendChild(lb);
    }

    var lbImg = document.getElementById('eventifyProofLightboxImg');
    var lbCounter = document.getElementById('eventifyProofLightboxCounter');
    var closeBtn = lb.querySelector('.eventify-proof-lightbox-close');
    var prevBtn = lb.querySelector('.eventify-proof-lightbox-nav.prev');
    var nextBtn = lb.querySelector('.eventify-proof-lightbox-nav.next');

    var currentImgList = [];
    var currentIndex = 0;

    function updateDisplay() {
      if (!currentImgList.length) return;
      lbImg.src = currentImgList[currentIndex].src;
      lbImg.alt = currentImgList[currentIndex].alt || 'Aperçu réalisation';
      lbCounter.textContent = (currentIndex + 1) + ' / ' + currentImgList.length;
      if (currentImgList.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      }
    }

    function openLb(index, list) {
      currentImgList = list;
      currentIndex = index;
      updateDisplay();
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    }

    function closeLb() {
      lb.classList.remove('active');
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }

    function prev() {
      if (!currentImgList.length) return;
      currentIndex = (currentIndex - 1 + currentImgList.length) % currentImgList.length;
      updateDisplay();
    }

    function next() {
      if (!currentImgList.length) return;
      currentIndex = (currentIndex + 1) % currentImgList.length;
      updateDisplay();
    }

    closeBtn.addEventListener('click', closeLb);
    prevBtn.addEventListener('click', function(e) { e.stopPropagation(); prev(); });
    nextBtn.addEventListener('click', function(e) { e.stopPropagation(); next(); });

    lb.addEventListener('click', function(e) {
      if (e.target === lb || e.target.classList.contains('eventify-proof-lightbox-content')) {
        closeLb();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });

    // Attach click events to each gallery image
    var imgArray = Array.prototype.slice.call(galleryImgs);
    imgArray.forEach(function(img, idx) {
      img.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openLb(idx, imgArray);
      });
      // Also allow clicking wrapper
      if (img.parentElement && img.parentElement.classList.contains('proof-media-wrapper')) {
        img.parentElement.addEventListener('click', function(e) {
          if (e.target !== img) {
            e.preventDefault();
            e.stopPropagation();
            openLb(idx, imgArray);
          }
        });
      }
    });
  }

  // =========================================================================
  // UNIVERSAL MOBILE MENU CONTROLLER
  // =========================================================================
  function initMobileMenu() {
    var triggers = document.querySelectorAll('.icon2, .icon-12');
    var menus = document.querySelectorAll('.menu');
    var closeButtons = document.querySelectorAll('.image-24');

    triggers.forEach(function (btn) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function (e) {
        menus.forEach(function (m) {
          m.style.setProperty('display', 'flex', 'important');
          m.style.setProperty('opacity', '1', 'important');
          m.style.setProperty('visibility', 'visible', 'important');
        });
      });
    });

    closeButtons.forEach(function (btn) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menus.forEach(function (m) {
          m.style.setProperty('display', 'none', 'important');
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initProofGalleryLightbox();
      initMobileMenu();
    });
  } else {
    initProofGalleryLightbox();
    initMobileMenu();
  }
})();
