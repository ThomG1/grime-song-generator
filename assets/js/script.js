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



var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause ⏸";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play ►";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ►";
}
