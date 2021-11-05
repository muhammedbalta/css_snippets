const tagContainer = document.getElementById('tagContainer');
const txtArea = document.getElementById('txtArea');

txtArea.focus();

txtArea.addEventListener('keyup', (e) => {
    if(e.key == 'Enter')
    {
        e.target.value = '';
        startSelectAnimation()

    }
    else{
        createTags(e.target.value);
    }
});

function createTags(val){
    let tags = val.split(',').filter(e => e.trim() != '').map(el => el.trim());
    tagContainer.innerHTML = '';
    tags.forEach(t => {
        let tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerText = t;
        tagContainer.appendChild(tag); 
    });
}

function startSelectAnimation(){
    let times = 30;
    let interval = setInterval(() => {
        let randTag = getRandomTag();
        randTag.classList.add('highlight');
        setTimeout(() => {randTag.classList.remove('highlight')}, 50)
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        let tag = getRandomTag();
        tag.classList.add('highlight');
    }, 100 * times);
}

function getRandomTag(){
    let tags = document.getElementsByClassName('tag');
    return tags[Math.floor(Math.random() * tags.length)];
}