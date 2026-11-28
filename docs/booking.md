---
---

<div class="hero">
  <h1>Book Your Event</h1>
  <p class="tagline">Fill out the form below and we'll contact you within 2 hours to confirm availability and send your quote.</p>
</div>

<div class="card-section">
  <form method="POST" action="/contact">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <div>
        <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Event Name / Client Name *</label>
        <input type="text" id="name" name="name" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;" />
      </div>

      <div>
        <label for="date" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Event Date *</label>
        <input type="date" id="date" name="date" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;" />
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <div>
        <label for="event-type" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Event Type *</label>
        <select id="event-type" name="event_type" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;">
          <option value="">Select...</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="festival">Festival</option>
          <option value="private">Private Party</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label for="budget" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Budget Range</label>
        <select id="budget" name="budget" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;">
          <option value="">Prefer not to say</option>
          <option value="under-500">&lt; $500</option>
          <option value="500-1500">$500 - $1,500</option>
          <option value="1500-3000">$1,500 - $3,000</option>
          <option value="3000+">$3,000+</option>
        </select>
      </div>
    </div>

    <div style="margin-top: 1.5rem;">
      <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email *</label>
      <input type="email" id="email" name="email" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;" />
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
      <div>
        <label for="phone" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone *</label>
        <input type="tel" id="phone" name="phone" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;" />
      </div>

      <div>
        <label for="location" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Event Location *</label>
        <input type="text" id="location" name="location" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;" />
      </div>
    </div>

    <div style="margin-top: 1.5rem;">
      <label for="notes" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Additional Notes</label>
      <textarea id="notes" name="notes" rows="4" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #444; background: #1a1a2e; color: #fff;"></textarea>
    </div>

    <div style="text-align: center; margin-top: 2rem;">
      <button type="submit" class="btn" style="background: var(--brand-primary); width: auto; padding: 1rem 3rem;">Submit Booking Request</button>
    </div>
  </form>
</div>

<div class="card-section" style="margin-top: 2rem;">
  <h3>📞 Alternative Booking</h3>
  <p>If the form is slow to load, call us directly at <strong>(231) 343-7221</strong> or email <strong>booking@3l3ven.com</strong></p>
</div>