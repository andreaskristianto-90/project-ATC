document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.btn--hamburger');
  const navContent = document.querySelector('.nav__content');

  if (hamburgerBtn && navContent) {
    hamburgerBtn.addEventListener('click', () => {
      // Toggle class 'is-active' pada tombol dan menu navigasi
      const isActive = navContent.classList.toggle('is-active');
      hamburgerBtn.classList.toggle('is-active');

      // Aksesibilitas: Perbarui status aria-expanded
      hamburgerBtn.setAttribute('aria-expanded', isActive);
    });

    // Menutup menu otomatis jika link di dalam navigasi diklik
    const navLinks = navContent.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navContent.classList.remove('is-active');
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});