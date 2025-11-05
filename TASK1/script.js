document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const colors = [
    'linear-gradient(135deg, #7F00FF, #E100FF)',
    'linear-gradient(135deg, #8E2DE2, #4A00E0)',
    'linear-gradient(135deg, #00C6FF, #0072FF)',
    'linear-gradient(135deg, #00F260, #0575E6)'
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        document.body.style.background = colors[index];
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));
});
