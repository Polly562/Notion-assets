document.addEventListener("DOMContentLoaded", function() {
    const playPauseButton = document.getElementById("play-pause-button");
    const playPauseIcon = playPauseButton.querySelector("i");
    const currentTimeDisplay = document.getElementById("current-time");
    const trackLengthDisplay = document.getElementById("track-length");
    const seekBar = document.getElementById("seek-bar");

    const audio = new Audio("https://raw.githubusercontent.com/Polly562/Notion-assets/main/Espresso%20-%20Sabrina%20Carpenter.mp3");
    let isPlaying = false;

    function playPause() {
        if (isPlaying) {
            audio.pause();
            playPauseIcon.className = "fas fa-play";
        } else {
            audio.play();
            playPauseIcon.className = "fas fa-pause";
        }
        isPlaying = !isPlaying;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    audio.addEventListener("loadedmetadata", function() {
        trackLengthDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", function() {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        seekBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });

    playPauseButton.addEventListener("click", playPause);
});
