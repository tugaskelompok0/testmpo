document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");

    let isPlaying = false;

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = "▶ Play";
        } else {
            audio.play();
            playBtn.textContent = "⏸ Pause";
        }
        isPlaying = !isPlaying;
    });
});
