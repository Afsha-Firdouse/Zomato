const sections = document.querySelectorAll('.section, .features, .gold, .brands, .qr');
const stats = document.querySelector('.stats');
const goldBenefits = document.querySelector('.gold-benefits');
const brands = document.querySelector('.brand-boxes');
const qrImg = document.querySelector('.qr img');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < triggerBottom) sec.classList.add('show');
  });
  if(stats.getBoundingClientRect().top < triggerBottom) stats.classList.add('show-stats');
  if(goldBenefits.getBoundingClientRect().top < triggerBottom) goldBenefits.classList.add('show-gold-benefits');
  if(brands.getBoundingClientRect().top < triggerBottom) brands.classList.add('show-brands');
  if(qrImg.getBoundingClientRect().top < triggerBottom) qrImg.parentElement.classList.add('show-qr');
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
