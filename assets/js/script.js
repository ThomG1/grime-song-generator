// Soundset Selector

let currentSounds = 'g-sounds';

const selectElement = document.querySelector('.soundsets');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.choice');
  currentSounds = event.target.value;

  const keyGroups = {
    'g-sounds': [1, 2, 3, 4,],
    'b-sounds': [5, 6, 7, 8,],
    's-sounds':[9, 0,'-','='],
  
}

for (let i=0; i < keyGroups[currentSounds].length; i++) {
  keys[i].setAttribute("data-key", keyGroups[currentSounds][i]);
}

});


// Playground


function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
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
 
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  const key = document.querySelector(`div[data-key="${keycode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  console.log('activated')
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => {

  key.addEventListener('transitionend', removeTransition);
  key.addEventListener("click", playSound);
});
window.addEventListener('keydown', playSound, false);

// loop player 

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');


const songs = ['d-loop-1', 'd-loop-2', 'd-loop-3', 'd-loop-4', 'd-loop-5'];


let songIndex = 2;

loadSong(songs[songIndex]);

// load songs
function loadSong(song) {

  audio.src = `assets/sounds/${song}.mp3`;
  cover.src = `assets/images/${song}.jpg`;
}

// song controls
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause track
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous track
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next tack
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






