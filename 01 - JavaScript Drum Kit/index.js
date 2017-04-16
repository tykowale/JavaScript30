function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return; // stop when no element associated with key
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransistion(e) {
  if (e.propertyName !== 'transform') {
    return; // only pay attention to what matters
  }

  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('transitionend', removeTransistion);
});
