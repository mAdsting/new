// Swiper initialization for featured listings
const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});

// GSAP animations for hero content
gsap.from('.logo', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.5,
});

gsap.from('.nav-links li', {
  y: -20,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
  delay: 0.8,
});

gsap.from('.hero-content h1', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 1.2,
});

gsap.from('.hero-content p', {
  y: 30,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 1.5,
});

gsap.from('.cta-button', {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  ease: 'back.out(1.7)',
  delay: 1.8,
});
