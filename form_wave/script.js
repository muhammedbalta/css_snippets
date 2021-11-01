const labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((c,i) => `<span style="transition-delay:${i * 40}ms">${c}</span>`).join('');
});