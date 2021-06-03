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
        play.innerHTML = '<i class="fas fa-play-circle fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>'
    }
}

// Create function to update the progress
function updateProgress() {
    let duration = Math.floor((video.duration) - Math.floor(video.currentTime));
    let countdown = video.duration - video.currentTime
        progress.value = (video.currentTime / video.duration) * 100;
    
        // Set the time for timestamp
        function updateCountdown(){
        let mins = Math.floor((video.duration - video.currentTime) / 60);
        if(mins < 10) {
            mins = '0' + String(mins);
        }
    
        let secs = Math.floor((video.duration - video.currentTime) % 60);
        if(secs < 10) {
            secs = '0' + String(secs);
        }
    
    timestamp.innerHTML = `${mins}:${secs}`;
    countdown--; 
    
    }
    setInterval(updateCountdown, 1000);
    
    }

// Create funtion to  stop the video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Create function to update the video progress using the slider
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
     
}

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