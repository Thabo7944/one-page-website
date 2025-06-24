// Simple fade-in for sections on scroll (for demo, not production-ready)
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in, .soft-anim');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.animationPlayState = 'running';
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Contact form JS (demo, no backend)
  const form = document.getElementById('contact');
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "#e74c3c";
      return;
    }
    // Fake sending
    msg.textContent = "Sending...";
    msg.style.color = "#6c63ff";
    setTimeout(() => {
      msg.textContent = "Thank you! Your message has been sent.";
      msg.style.color = "#17ad6e";
      form.reset();
    }, 1200);
  });
});