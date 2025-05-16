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
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
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

// Animate listing cards on scroll (GSAP + ScrollTrigger)
document.addEventListener("DOMContentLoaded", () => {
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".listing-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  }

  // Modal functionality for listing cards
  document.querySelectorAll('.listing-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img')?.src || '';
      const title = card.querySelector('h3')?.innerText || '';
      const price = card.querySelector('p')?.innerText || '';

      document.getElementById('modal-img').src = img;
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-price').innerText = price;

      document.getElementById('listing-modal').style.display = 'flex';
    });
  });

  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      document.getElementById('listing-modal').style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    const modal = document.getElementById('listing-modal');
    if (modal && e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.category-section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});
 const filterButtons = document.querySelectorAll('.filter-btn');
const listingCards = document.querySelectorAll('.listing-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    listingCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

gsap.from(".newsletter", {
  scrollTrigger: ".newsletter",
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});
