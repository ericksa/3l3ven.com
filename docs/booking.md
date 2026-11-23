---
---

<div class="booking">
  <h1>Book Your Event</h1>
  
  <form method="POST" action="/contact">
    <div class="form-group">
      <label for="name">Event Name / Client Name *</label>
      <input type="text" id="name" name="name" required />
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label for="event-type">Event Type *</label>
        <select id="event-type" name="event_type" required>
          <option value="">Select...</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate Event</option>
          <option value="festival">Festival</option>
          <option value="private">Private Party</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="date">Event Date *</label>
        <input type="date" id="date" name="date" required />
      </div>
    </div>
    
    <div class="form-group">
      <label for="budget">Budget Range</label>
      <select id="budget" name="budget">
        <option value="">Prefer not to say</option>
        <option value="under-500">&lt; $500</option>
        <option value="500-1500">$500 - $1,500</option>
        <option value="1500-3000">$1,500 - $3,000</option>
        <option value="3000+">$3,000+</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" name="email" required />
    </div>
    
    <div class="form-group">
      <label for="phone">Phone *</label>
      <input type="tel" id="phone" name="phone" required />
    </div>
    
    <div class="form-group">
      <label for="location">Event Location *</label>
      <input type="text" id="location" name="location" required />
    </div>
    
    <div class="form-group">
      <label for="notes">Additional Notes</label>
      <textarea id="notes" name="notes" rows="4"></textarea>
    </div>
    
    <button type="submit" class="submit-btn">Submit Booking Request</button>
  </form>
</div>