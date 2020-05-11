addEventListeners();
var whiteSkullSvg = document.querySelector(".white-skull-svg");
var blackSkullSvg = document.querySelector(".black-skull-svg");
var transitionSvg = document.querySelector(".transition-svg");
var transition2Svg = document.querySelector(".transition2-svg");
var blueTextSvg = document.querySelector(".blue-text-svg");
var blueTextSvgSmall = document.querySelector(".blue-text-svg-small");
var transitionSocialsWrapper = document.querySelector(".transition-socials-wrapper");
var finalSocialsWrapper = document.querySelector(".final-socials-wrapper");
var body = document.querySelector("body");
var timeouts = [];
var svgs = document.querySelector('svg');
var interval;
var playingAudio = false;
var playedAudio = false;

var audio1 = new Audio('audio/audio 1.mp4');
var audio2 = new Audio('audio/audio 2.mp4');
var audio3 = new Audio('audio/audio 3.mp4');
var whiteAudio = new Audio('audio/sound on white.mp3')
var audios = [audio1, audio2, audio3, whiteAudio];

function svgLoaded() {
  whiteSkullSvg.style.display = 'block';
}

function addEventListeners() {
  $(".white-skull-svg g").click(function () {
    if (whiteSkullSvg.style.display !== "none") { 
      const t1 = performance.now();
      stopAllAudio();
      playBlackSvgAudio();
      whiteSkullSvg.style.display = "none";
      blackSkullSvg.style.display = "none";
      transitionSvg.style.display = "block";  
      transitionSocialsWrapper.style.display = "flex";  
        transitionSvg.style.display = 'none';
        transition2Svg.style.display = 'block';
        timeouts.push(setTimeout(() => {
          transitionSvg.style.display = "none";
          blackSkullSvg.style.display = "block";       
          transition2Svg.style.display = 'none';
          if ($(window).width() > 930) {
            blueTextSvg.style.display = 'block';
            $('svg').css('height', '100%');
          } else {
            blueTextSvgSmall.style.display = 'block'
            if ($(window).width() < 600) {
              $('svg').css('height', '90%');
            }
          }
          body.style.background = "black"; 
          transitionSocialsWrapper.style.display = 'none';
          finalSocialsWrapper.style.display = 'flex';
        }, 0.1));
    }
  });

  $('.black-skull-svg g').click(function(e) {
    stopAllAudio();
    playWhiteSvgAudio();
    resetState();
  });

  $(window).resize(function(){
    if ($(window).width() < 930 && (blueTextSvg.style.display == 'block' || blueTextSvgSmall.style.display == 'block')) {
      blueTextSvg.style.display = 'none';
      blueTextSvgSmall.style.display = 'block'
      if ($(window).width() < 600) {
        $('svg').css('height', '90%');
      }
    } else if($(window).width() > 930 && blueTextSvgSmall.style.display === 'block') {
      blueTextSvg.style.display = 'block';
      blueTextSvgSmall.style.display = 'none'
      $('svg').css('height', '100%');
    }
  })
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
  blueTextSvgSmall.style.display = 'none';
  transitionSocialsWrapper.style.display = 'none';
  finalSocialsWrapper.style.display = 'none';
}

function playBlackSvgAudio() {
  const index = Math.floor(Math.random() * 3);
  console.log('playing' + index);
  audios[index].play();
}

function playWhiteSvgAudio() {
  whiteAudio.play();
}

function clearTimeouts() {
  timeouts.forEach(timeout => {
    clearTimeout(timeout);
  })
}