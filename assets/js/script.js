/* jshint esversion: 11 */

/*
** Soundset Selector
** allows user to choose from multiple sound sets
*/

const selectElement = document.getElementById('soundsets');

selectElement.addEventListener("change", function() {
  let soundGroup = this.value;
  keys.forEach(key => {
    key.dataset.soundset = soundGroup;
  });
});

/*
** Playground
** allows user to click pads or press keys to generate a sound
*/

function removeTransition(e) {

  e.target.classList.remove('playing');
}

function playSound(e) {

  if (e.target.parentNode.classList.contains("key")) {
    e = e.target.parentNode;
  } else if (e.target.classList.contains('key')) {
    e = e.target;
  }

  let keycode;

  if (e instanceof KeyboardEvent) {
    keycode = e.key;
  } else if (e.classList.contains('key')) {
    keycode = e.dataset.key;
  }

  const availableKeys = ["1", "2", "3", "4"];
  if (availableKeys.includes(keycode)) {
    const key = document.querySelector(`div[data-key="${keycode}"]`);
    const keySoundset = key.dataset.soundset;
  
    const audio = document.querySelector(`audio[data-key="${keySoundset}${keycode}"]`);
    if (!audio) return;
  
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => {

  key.addEventListener('transitionend', removeTransition);
  key.addEventListener("click", playSound);
});
window.addEventListener('keydown', playSound, false);

/*
** Loop Player
** allows user play/pause backing tracks
*/

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');


const songs = ['d-loop-1', 'd-loop-2', 'd-loop-3', 'd-loop-4', 'd-loop-5'];

let songIndex = 2;

loadSong(songs[songIndex]);

// load songs
function loadSong(song) {

  audio.src = `assets/sounds/${song}.mp3`;
  cover.src = `assets/images/${song}.jpg`;
}

// song controls - allows user to play track
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause track - allows usr to pause track
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous track - allows user to play previous track
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next tack - allows user to play next track
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change loop
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);