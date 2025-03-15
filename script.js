document.addEventListener("DOMContentLoaded", function () {
    // Musik Otomatis dengan Kontrol
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

    // Form Konfirmasi Kehadiran
    const form = document.getElementById("rsvp-form");
    const message = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nama = document.getElementById("nama").value;
        let jumlah = document.getElementById("jumlah").value;
        let kehadiran = document.getElementById("kehadiran").value;

        if (kehadiran === "Hadir") {
            message.innerHTML = `Terima kasih, <b>${nama}</b>! Kami menantikan kehadiran Anda bersama ${jumlah} tamu lainnya. 🥰`;
        } else if (kehadiran === "Tidak Bisa Hadir") {
            message.innerHTML = `Kami sedih mendengar Anda tidak bisa hadir, <b>${nama}</b>. Semoga lain kali bisa bertemu! 💕`;
        } else {
            message.innerHTML = `Terima kasih, <b>${nama}</b>. Jika sudah yakin, beri tahu kami nanti ya! 😊`;
        }

        message.style.display = "block";
        form.reset();
    });
});
