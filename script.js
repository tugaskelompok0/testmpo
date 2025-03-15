document.addEventListener("DOMContentLoaded", function () {
    // =================== Musik Otomatis dengan Kontrol ===================
    const audio = document.getElementById("bg-music");
    const playBtn = document.getElementById("play-btn");
    let isPlaying = false;

    playBtn.addEventListener("click", function () {
        isPlaying ? audio.pause() : audio.play();
        playBtn.textContent = isPlaying ? "▶ Play" : "⏸ Pause";
        isPlaying = !isPlaying;
    });

    // =================== Form Konfirmasi Kehadiran ===================
    const form = document.getElementById("rsvp-form");
    const message = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nama = document.getElementById("nama").value;
        let kehadiran = document.getElementById("kehadiran").value;

        if (kehadiran === "Hadir") {
            message.innerHTML = `Terima kasih, <b>${nama}</b>! Kami menantikan kehadiran Anda bersama tamu lainnya. 🥰`;
        } else if (kehadiran === "Tidak Bisa Hadir") {
            message.innerHTML = `Kami sedih mendengar Anda tidak bisa hadir, <b>${nama}</b>. Semoga lain kali bisa bertemu! 💕`;
        } else {
            message.innerHTML = `Terima kasih, <b>${nama}</b>. Jika sudah yakin, beri tahu kami nanti ya! 😊`;
        }

        message.style.display = "block";
        form.reset();
    });

    // =================== Hitung Mundur ke Tanggal Tertentu ===================
    const targetDate = new Date("2026-10-10").getTime();
    const timerElement = document.getElementById("timer");

    function updateCountdown() {
        let now = new Date().getTime();
        let distance = targetDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days} hari : ${hours} jam : ${minutes} menit : ${seconds} detik`;
    }

    // Jalankan updateCountdown setiap detik
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Panggil pertama kali agar tidak ada delay 1 detik saat load
});
