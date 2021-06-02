// Get DOM Elements for JS Code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Create function for clicking on video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Create function for updating the play / pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Create function to update the progress

// Create funtion to  stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Create function to update the video progress using the slider


// Event Listeners
// 1. Event listener for the video player
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

// 2. Event listener for play button
play.addEventListener('click', toggleVideoStatus);

// 3. Event listener for stop button
stop.addEventListener('click', stopVideo);

// 4. Event listener for progress bar
progress.addEventListener('change', setVideoProgress);