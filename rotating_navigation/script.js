const closeBtn = document.querySelector('#close');
const openBtn = document.querySelector('#open');
const container = document.querySelector('.container');

closeBtn.addEventListener('click', () => container.classList.remove('show-nav'));
openBtn.addEventListener('click', () => container.classList.add('show-nav'));