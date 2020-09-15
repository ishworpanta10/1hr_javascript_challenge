const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    document.body.style.background = changeBg();

    // console.log(changeBg());
});

function changeBg() {
    return `hsl(${Math.floor(Math.random() * 360)},100%, 50%)`;
}

setInterval(() => {
    document.body.style.background = changeBg();
}, 2000);
