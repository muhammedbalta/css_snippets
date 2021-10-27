const loadText = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let loading = 0;

let int = setInterval(blurring, 30);

function blurring()
{
    loading++;
    if(loading == 100)
    {
        clearInterval(int);
    }

    loadText.innerText = `${loading}%`;
    loadText.style.opacity = scale(loading, 0, 100, 1, 0);
    console.log("Opacity: " + loadText.style.opacity + "Loading: " + loading );
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max)
{
    return ((num - in_max) * (out_max - out_min)) / (in_max - in_min) + out_max;

}

