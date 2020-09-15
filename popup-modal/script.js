const start = document.getElementById('open');
const end = document.getElementById('close');
const container = document.getElementById('container');

start.addEventListener('click', () => {
    container.classList.add('active');
})

end.addEventListener('click', () => {
    container.classList.remove('active');
})