const btn = document.querySelector('button');
btn.addEventListener('click', animate);

function animate() {
    const box = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 400) {
            clearInterval();
        } else {
            pos++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }
}
