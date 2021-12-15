const rippleButtons = document.querySelectorAll(".ripple");

rippleButtons.forEach(r => r.addEventListener("click",function(e) {
    const winx = e.clientX;
    const winy = e.clientY;

    const buttonOffsetX = e.target.offsetLeft;
    const buttonOffsetY = e.target.offsetTop;

    const clickX = winx - buttonOffsetX;
    const clickY = winy - buttonOffsetY;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = clickY + "px";
    circle.style.left = clickX + "px";
    console.log(e);

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);

}));