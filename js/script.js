// ✨ Fade In on Scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.5});

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-init');
  observer.observe(section);
});
