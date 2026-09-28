/**
 * Sphinx '26 Curved Arc Carousel Controller
 * Math-driven radial layout with smooth dynamic updates
 */

class ArcCarousel {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = Object.assign({
      radius: 380,
      centerX: -180,
      centerY: 280,
      angleStep: 14, // degrees separation between cards
      onSelect: () => {}
    }, options);

    this.items = [];
    this.activeIndex = 0;
    this.isDragging = false;
    this.startY = 0;
    this.wheelDebounce = false;

    this.initEvents();
  }

  setItems(itemsData) {
    this.items = itemsData;
    this.activeIndex = Math.floor(itemsData.length / 2); // Default to middle (e.g. 03)
    if (this.activeIndex < 0) this.activeIndex = 0;
    this.render();
  }

  render() {
    if (!this.container) return;
    this.container.innerHTML = '';

    this.items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `arc-card ${index === this.activeIndex ? 'active' : ''}`;
      card.dataset.index = index;

      card.innerHTML = `
        <div class="arc-card-bg" style="background-image: url('${item.image}')"></div>
        <div class="arc-card-overlay"></div>
        <div class="arc-card-content">
          <span class="arc-card-num">${item.num}</span>
          <h3 class="arc-card-title">${item.title}</h3>
        </div>
      `;

      card.addEventListener('click', () => {
        this.setActiveIndex(index);
      });

      this.container.appendChild(card);
    });

    this.updateCardPositions();
  }

  setActiveIndex(index) {
    if (index < 0 || index >= this.items.length) return;
    this.activeIndex = index;

    const cards = this.container.querySelectorAll('.arc-card');
    cards.forEach((card, idx) => {
      if (idx === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    this.updateCardPositions();
    if (typeof this.options.onSelect === 'function') {
      this.options.onSelect(this.items[index], index);
    }
  }

  updateCardPositions() {
    const cards = this.container.querySelectorAll('.arc-card');
    const { radius, centerX, centerY, angleStep } = this.options;

    cards.forEach((card, idx) => {
      // Calculate angular distance relative to active index
      const offsetIndex = idx - this.activeIndex;
      const angleDeg = offsetIndex * angleStep;
      const angleRad = (angleDeg * Math.PI) / 180;

      // Polar coordinates calculation relative to arc pivot center
      const posX = centerX + radius * Math.cos(angleRad);
      const posY = centerY + radius * Math.sin(angleRad);
      const rotationDeg = angleDeg * 0.65;

      // Distance factor for scale & opacity
      const distance = Math.abs(offsetIndex);
      const opacity = Math.max(0.2, 1 - distance * 0.25);
      const scale = idx === this.activeIndex ? 1.08 : Math.max(0.78, 1 - distance * 0.08);
      const zIndex = 100 - distance;

      card.style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotationDeg}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });
  }

  initEvents() {
    // Wheel scroll support for carousel rotation
    window.addEventListener('wheel', (e) => {
      if (this.wheelDebounce) return;
      
      // Check if mouse cursor is over carousel area or main showcase
      const isOverCarousel = e.target.closest('#arc-carousel-container') || e.target.closest('.main-stage');
      if (!isOverCarousel) return;

      if (Math.abs(e.deltaY) > 20) {
        this.wheelDebounce = true;
        if (e.deltaY > 0) {
          this.setActiveIndex(Math.min(this.items.length - 1, this.activeIndex + 1));
        } else {
          this.setActiveIndex(Math.max(0, this.activeIndex - 1));
        }

        setTimeout(() => {
          this.wheelDebounce = false;
        }, 300);
      }
    }, { passive: true });

    // Keyboard arrow keys navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        this.setActiveIndex(Math.min(this.items.length - 1, this.activeIndex + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        this.setActiveIndex(Math.max(0, this.activeIndex - 1));
      }
    });
  }
}
