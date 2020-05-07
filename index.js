addEventListeners();
var whiteSkullSvg = document.querySelector(".white-skull-svg");
var blackSkullSvg = document.querySelector(".black-skull-svg");
var transitionSvg = document.querySelector(".transition-svg");
var transition2Svg = document.querySelector(".transition2-svg");
var blueTextSvg = document.querySelector(".blue-text-svg");
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
  $(".white-skull-svg g").mouseenter(function () {
    if (whiteSkullSvg.style.display !== "none") { 
      if(playedAudio) {
        playAudio();
      }   
      whiteSkullSvg.style.display = "none";
      blackSkullSvg.style.display = "none";
      transitionSvg.style.display = "block";    
      body.style.background = "black"; 
      timeouts.push(setTimeout(() => {             
        transitionSvg.style.display = 'none';
        transition2Svg.style.display = 'block';
        timeouts.push(setTimeout(() => {
          transitionSvg.style.display = "none";
          blackSkullSvg.style.display = "block";       
          transition2Svg.style.display = 'none';
        }, 1));
      }, 1))
    }
  });

  $('.black-skull-svg g').mouseleave(function(e) {
    resetState();
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    })
  });

  $('.black-skull-svg g').click(function(e) {
    let allPaused = true;
    audios.forEach(audio => {
      if (!audio.paused) {
        allPaused = false;
        return;
      }
    })
    if(allPaused) {
      playAudio();
    }
  });

  // $('.black-skull-svg g').mouseleave(function() {
  //   resetState();
  // }); 
}

function resetState() {
  clearTimeouts();
  body.style.background = "white";
  whiteSkullSvg.style.display = "block";
  blackSkullSvg.style.display = "none";
  transitionSvg.style.display = "none";
  transition2Svg.style.display = 'none';
}

function playAudio() {
  const index = Math.floor(Math.random() * 3);
  console.log('playing' + index);
  audios[index].play();
  playedAudio = true;
}

function clearTimeouts() {
  timeouts.forEach(timeout => {
    clearTimeout(timeout);
  })
}