var playButtons = document.querySelectorAll('.play');

function pauseAll(){
  playButtons.forEach(function(playButtonOther){
    playButtonOther.querySelector('.sound').pause();
    playButtonOther.querySelector('.sound').currentTime = 0;
  });
  pauseLoop();
}

function pauseLoop(){
  loopMusic.pause();
  loopMusic.currentTime = 0;
  pauseLoopMusic.classList.add('hidden');
  playLoopMusic.classList.remove('hidden');
}

playButtons.forEach(function(playButton){

  playButton.querySelector('.sound').volume = 0.2;

  playButton.addEventListener('click', function(event){
    pauseAll();
    playButton.querySelector('.sound').play();
  });
});


loopMusic = document.getElementById('loop-music');
playLoopMusic = document.getElementById('play-loop');
pauseLoopMusic = document.getElementById('pause-loop');

loopMusic.loop = true;

playLoopMusic.addEventListener('click', function() {
    loopMusic.play();
    playLoopMusic.classList.add('hidden');
    pauseLoopMusic.classList.remove('hidden');
});

pauseLoopMusic.addEventListener('click', function() {
    pauseLoop();
});
