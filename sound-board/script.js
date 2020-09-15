const sounds = ['beep', 'boomshakalaka', 'gameover', 'killer', 'new_game', 'pause', 'slap'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    document.body.appendChild(btn);

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        pauseSongs();
        document.getElementById(sound).play();
    });

    function pauseSongs() {
        const songs = sounds.forEach((sound) => {
            const song = document.getElementById(sound);
            song.pause();
            song.currentTime = 0;
        });
    }
})