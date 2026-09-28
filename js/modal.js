/**
 * Sphinx '26 Event Detail & Registration Glassmorphic Modal Manager
 */

class EventModalManager {
  constructor() {
    this.modalBackdrop = document.getElementById('event-modal');
    this.currentEvent = null;
    this.initListeners();
  }

  initListeners() {
    if (!this.modalBackdrop) return;

    // Close button
    const closeBtn = this.modalBackdrop.querySelector('.btn-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Backdrop click outside to close
    this.modalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.modalBackdrop) {
        this.close();
      }
    });

    // Tab buttons switching
    const tabBtns = this.modalBackdrop.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.target.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // Registration Form submit
    const regForm = document.getElementById('event-registration-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleRegistrationSubmit(regForm);
      });
    }

    // ESC key close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalBackdrop.classList.contains('open')) {
        this.close();
      }
    });
  }

  open(eventData, defaultTab = 'overview') {
    this.currentEvent = eventData;
    this.populateModal(eventData);
    this.switchTab(defaultTab);
    this.modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  switchTab(tabId) {
    const tabBtns = this.modalBackdrop.querySelectorAll('.tab-btn');
    const tabContents = this.modalBackdrop.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabContents.forEach(content => {
      if (content.id === `tab-${tabId}`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  populateModal(event) {
    // Title header
    document.getElementById('modal-event-title').textContent = event.title;
    document.getElementById('modal-event-tagline').textContent = event.tagline;

    // Overview Tab
    document.getElementById('modal-overview-desc').textContent = event.rulebook.overview || event.description;
    
    // Prizes
    const prizes = event.rulebook.prizes || {};
    document.getElementById('prize-1st').textContent = prizes.first || 'TBA';
    document.getElementById('prize-2nd').textContent = prizes.second || 'TBA';
    document.getElementById('prize-3rd').textContent = prizes.third || 'TBA';

    // Rulebook Tab
    const rulesList = document.getElementById('modal-rules-list');
    rulesList.innerHTML = '';
    const rules = event.rulebook.rules || [];
    rules.forEach(rule => {
      const li = document.createElement('li');
      li.textContent = rule;
      rulesList.appendChild(li);
    });

    // Registration Form setup
    document.getElementById('reg-event-title').value = event.title;
    document.getElementById('reg-entry-fee').textContent = event.stats.entry;
  }

  handleRegistrationSubmit(form) {
    const teamName = form.querySelector('#team-name').value;
    const captainName = form.querySelector('#captain-name').value;
    
    // Show success confirmation state inside modal
    const regTabContent = document.getElementById('tab-register');
    regTabContent.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3.5rem; color: #ffaa33; margin-bottom: 1rem;">✓</div>
        <h3 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--color-accent-gold); margin-bottom: 0.8rem;">REGISTRATION CONFIRMED!</h3>
        <p style="color: var(--text-muted); line-height: 1.6; max-width: 450px; margin: 0 auto 1.5rem auto;">
          Welcome aboard, <strong>${captainName}</strong>! Squad <strong>"${teamName}"</strong> has been registered for <strong>${this.currentEvent.title}</strong>.
        </p>
        <div style="background: rgba(255, 170, 51, 0.08); border: 1px solid var(--border-glass-bright); padding: 1rem; border-radius: 8px; font-family: var(--font-heading); font-size: 0.85rem; color: var(--color-primary); margin-bottom: 2rem;">
          PASS PASS ID: SPH26-${Math.floor(100000 + Math.random() * 900000)}
        </div>
        <button class="btn-primary-cta" onclick="window.eventModal.close()">RETURN TO EVENTS</button>
      </div>
    `;
  }
}
