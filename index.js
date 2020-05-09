addEventListeners();
var whiteSkullSvg = document.querySelector(".white-skull-svg");
var blackSkullSvg = document.querySelector(".black-skull-svg");
var transitionSvg = document.querySelector(".transition-svg");
var transition2Svg = document.querySelector(".transition2-svg");
var blueTextSvg = document.querySelector(".blue-text-svg");
var transitionSocialsWrapper = document.querySelector(".transition-socials-wrapper");
var finalSocialsWrapper = document.querySelector(".final-socials-wrapper");
var body = document.querySelector("body");
var timeouts = [];
var interval;
var playingAudio = false;
var playedAudio = false;

var audio1 = new Audio('audio/audio 1.mp4');
var audio2 = new Audio('audio/audio 2.mp4');
var audio3 = new Audio('audio/audio 3.mp4');
var audios = [audio1, audio2, audio3];

function addEventListeners() {
  $(".white-skull-svg g").click(function () {
    if (whiteSkullSvg.style.display !== "none") { 
      stopAllAudio();
      playAudio();
      whiteSkullSvg.style.display = "none";
      blackSkullSvg.style.display = "none";
      transitionSvg.style.display = "block";  
      transitionSocialsWrapper.style.display = "block";  
      timeouts.push(setTimeout(() => {             
        transitionSvg.style.display = 'none';
        transition2Svg.style.display = 'block';
        timeouts.push(setTimeout(() => {
          transitionSvg.style.display = "none";
          blackSkullSvg.style.display = "block";       
          transition2Svg.style.display = 'none';
          blueTextSvg.style.display = 'block';
          body.style.background = "black"; 
          transitionSocialsWrapper.style.display = 'none';
          finalSocialsWrapper.style.display = 'block';
        }, 1));
      }, 1))
    }
  });

  $('.black-skull-svg g').click(function(e) {
    stopAllAudio();
    playAudio();
    resetState();
  });
}

function stopAllAudio() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  })
}

function resetState() {
  clearTimeouts();
  body.style.background = "white";
  whiteSkullSvg.style.display = "block";
  blackSkullSvg.style.display = "none";
  transitionSvg.style.display = "none";
  transition2Svg.style.display = 'none';
  blueTextSvg.style.display = 'none';
  transitionSocialsWrapper.style.display = 'none';
  finalSocialsWrapper.style.display = 'none';
}

function playAudio() {
  const index = Math.floor(Math.random() * 3);
  console.log('playing' + index);
  audios[index].play();
}

function clearTimeouts() {
  timeouts.forEach(timeout => {
    clearTimeout(timeout);
  })
}