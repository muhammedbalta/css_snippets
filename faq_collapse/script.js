const faqs = document.querySelectorAll('.faq');
const faqtoggles = document.querySelectorAll('.faq-toggle');

faqtoggles.forEach((ft,i) => ft.addEventListener('click', () => {
    faqs[i].classList.toggle('active');
}));