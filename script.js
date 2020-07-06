// keypress event listener
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  
  if(!audio) return;
  audio.currentTime = 0; // reset time if playing
  audio.play(); // start playing

  key.classList.add('playing'); // add animation
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition)
});

// onclick event function
function play(keyCode){
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  
  if(!audio) return;  
  audio.currentTime = 0; // reset time if playing
  audio.play(); // start playing

  key.classList.add('playing'); // add animation
}


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}