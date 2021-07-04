// STYLES=============================================================================
import '../sass/style.sass';

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((item) => item.addEventListener('click', function (e) {
  e.preventDefault();
  const id = item.getAttribute('href');
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}));
