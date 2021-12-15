const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_image = document.querySelector('#profile_img');
const nameInput = document.querySelector('#name');
const date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData(){
    header.innerHTML = `<img src="mosque.jpg" alt="">`;
    title.innerHTML = ` Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quae!`
    profile_image.innerHTML = `<img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="">`;
    nameInput.innerHTML = `Muhammed Balta`;
    date.innerHTML = `14 Ara 2021`;

    animated_bgs.forEach(e => e.classList.remove('animated-bg'));
    animated_bg_texts.forEach(e => e.classList.remove('animated-bg-text'));
}