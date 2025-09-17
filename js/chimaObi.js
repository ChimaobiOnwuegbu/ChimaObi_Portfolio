
  const counters = document.querySelectorAll('.counter');

  const startCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    let current = 0;
    const increment = Math.ceil(target / 200);

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current.toLocaleString();
    }, 20);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted'); // Prevent rerun
        startCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

