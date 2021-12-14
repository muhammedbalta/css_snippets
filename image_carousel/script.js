let imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const size = document.querySelectorAll('img').length;

let current = 0;
leftButton.addEventListener('click', () => {
    if(current <= 0) {
        current = size -1;
        imageContainer.style.transform = `translateX(-${current * 100}%)`;
        return;
    }
    current = current - 1;
    imageContainer.style.transform = `translateX(-${current * 100}%)`;
});

rightButton.addEventListener('click', () => {
    if(current >= size - 1) {
        current= 0;
        imageContainer.style.transform = `translateX(-${current * 100}%)`;
        return
    }
        current = current + 1;
        imageContainer.style.transform = `translateX(-${current * 100}%)`;
});

setInterval(() => {
    
    if(current >= size - 1) {
        current= 0;
        imageContainer.style.transform = `translateX(-${current * 100}%)`;
        return
    }
        current = current + 1;
        imageContainer.style.transform = `translateX(-${current * 100}%)`;
}, 2000);

