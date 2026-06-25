// Заповніть шляхами до реальних відео, коли вони з'являться у папці /videos.
// Ключ "relax" відповідає блоку кабіни Релакс, інші ключі — номерам етапів виробництва.
const STAGE_VIDEOS = {
  1: null, // "videos/stage-1-cutting.mp4"
  2: null, // "videos/stage-2-tempering.mp4"
  3: null, // "videos/stage-3-assembly.mp4"
  4: null, // "videos/stage-4-packing.mp4"
  5: null, // "videos/stage-5-installation.mp4"
  6: null, // "videos/stage-6-result.mp4"
  relax: null, // "videos/relax-cabin.mp4"
};

document.querySelectorAll('.video-placeholder').forEach((el) => {
  el.addEventListener('click', () => {
    const stage = el.dataset.stage;
    const src = STAGE_VIDEOS[stage];
    if (!src) {
      el.classList.add('no-video');
      const badge = el.querySelector('.stage-badge');
      if (badge && !el.dataset.warned) {
        el.dataset.warned = '1';
        const original = badge.textContent;
        badge.textContent = 'Відео скоро буде';
        setTimeout(() => { badge.textContent = original; }, 2000);
      }
      return;
    }
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    el.replaceWith(video);
  });
});

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
