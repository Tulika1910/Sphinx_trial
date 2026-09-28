/**
 * Sphinx '26 Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global modal instance
  window.eventModal = new EventModalManager();

  // Current active dataset state
  let currentCategory = 'small_events';
  let activeEventData = null;

  // Initialize Arc Carousel
  const carousel = new ArcCarousel('arc-carousel-container', {
    radius: 340,
    centerX: -190,
    centerY: 240,
    angleStep: 15,
    onSelect: (eventItem, index) => {
      updateShowcasePanel(eventItem, index);
    }
  });

  // Load initial Category events
  function loadCategory(catId) {
    currentCategory = catId;
    const eventsList = SPHINX_EVENTS_DATA.events[catId] || [];

    // Update active state on category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
      if (pill.dataset.cat === catId) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    carousel.setItems(eventsList);
  }

  // Update Showcase Panel Content
  function updateShowcasePanel(eventItem, index) {
    if (!eventItem) return;
    activeEventData = eventItem;

    const totalCount = SPHINX_EVENTS_DATA.events[currentCategory].length;

    // Category Tag & Counter
    const catLabel = SPHINX_EVENTS_DATA.categories.find(c => c.id === currentCategory)?.label || 'EVENTS';
    document.getElementById('showcase-category-tag').textContent = catLabel;
    document.getElementById('showcase-counter').innerHTML = `<span class="current">${eventItem.num}</span> <span class="total">/ 0${totalCount}</span>`;

    // Title & Tagline with glitch reveal effect
    const titleEl = document.getElementById('showcase-title');
    titleEl.classList.remove('animate-reveal');
    void titleEl.offsetWidth; // Trigger reflow
    titleEl.textContent = eventItem.title;
    titleEl.classList.add('animate-reveal');

    document.getElementById('showcase-tagline').textContent = eventItem.tagline;
    document.getElementById('showcase-description').textContent = eventItem.description;

    // Stats Grid Pills
    document.getElementById('stat-players').textContent = eventItem.stats.players;
    document.getElementById('stat-duration').textContent = eventItem.stats.duration;
    document.getElementById('stat-mode').textContent = eventItem.stats.mode;
    document.getElementById('stat-entry').textContent = eventItem.stats.entry;

    // Background Backdrop Crossfade
    const heroBg = document.getElementById('hero-backdrop-img');
    if (heroBg) {
      heroBg.style.opacity = '0.3';
      setTimeout(() => {
        heroBg.style.backgroundImage = `url('${eventItem.image}')`;
        heroBg.style.opacity = '0.8';
      }, 200);
    }

    // Update Arc Labels
    document.querySelectorAll('.arc-index-num').forEach((lbl, idx) => {
      if (idx === index) {
        lbl.classList.add('active');
      } else {
        lbl.classList.remove('active');
      }
    });

    // Render footer pagination indicators
    renderFooterPagination(totalCount, index);
  }

  // Render Footer Pagination Bar
  function renderFooterPagination(total, activeIdx) {
    const dotsContainer = document.getElementById('footer-pagination-dots');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const numStr = (i + 1 < 10 ? '0' : '') + (i + 1);
      const dot = document.createElement('span');
      dot.className = `page-item ${i === activeIdx ? 'active' : ''}`;
      dot.textContent = numStr;
      dot.addEventListener('click', () => carousel.setActiveIndex(i));
      dotsContainer.appendChild(dot);
    }
  }

  // Category Selector Event Listeners
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const cat = e.target.dataset.cat;
      loadCategory(cat);
    });
  });

  // CTA Button Handlers
  document.getElementById('btn-enter-event')?.addEventListener('click', () => {
    if (activeEventData) {
      window.eventModal.open(activeEventData, 'register');
    }
  });

  document.getElementById('btn-view-rulebook')?.addEventListener('click', () => {
    if (activeEventData) {
      window.eventModal.open(activeEventData, 'rulebook');
    }
  });

  // Initial Load
  loadCategory('small_events');

  // Ambient Canvas Particle Generator
  initAmbientParticleCanvas();
});

// Ambient Floating Ember Particles Canvas
function initAmbientParticleCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.8 + 0.2),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.3 ? '#ffaa33' : '#ff2a5f'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}
