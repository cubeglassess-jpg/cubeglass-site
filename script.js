// --- Catalog filter ---
const navItems = document.querySelectorAll('.catalog-nav-item');
const catCards = document.querySelectorAll('.cat-card');

navItems.forEach((btn) => {
  btn.addEventListener('click', () => {
    navItems.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    catCards.forEach((card) => {
      card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
    });
  });
});

// --- Production process: scroll-synced scenes ---
const steps = document.querySelectorAll('.step');
const scenes = document.querySelectorAll('.scene');
const dots = document.querySelectorAll('.dot');

if (steps.length) {
  const setActiveStage = (n) => {
    scenes.forEach((s) => s.classList.toggle('active', s.dataset.scene === n));
    dots.forEach((d) => d.classList.toggle('active', d.dataset.dot === n));
    steps.forEach((s) => s.classList.toggle('active', s.dataset.step === n));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStage(entry.target.dataset.step);
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  steps.forEach((step) => observer.observe(step));
}

// Burger menu toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// Contact form (front-end only demo)
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = 'Дякуємо! Ми зв\'яжемося з вами найближчим часом.';
    form.reset();
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
