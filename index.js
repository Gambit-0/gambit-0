addEventListeners();
var whiteSkullSvg = document.querySelector(".white-skull-svg");
var blackSkullSvg = document.querySelector(".black-skull-svg");
var transitionSvg = document.querySelector(".transition-svg");
var blueTextSvg = document.querySelector(".blue-text-svg");
var body = document.querySelector("body");
var timeout;

function addEventListeners() {
  $(".white-skull-svg g").mouseover(function () {
    if (whiteSkullSvg.style.display !== "none") {
      whiteSkullSvg.style.display = "none";
      blackSkullSvg.style.display = "none";
      transitionSvg.style.display = "block";
      timeout = setTimeout(() => {
        transitionSvg.style.display = "none";
        blackSkullSvg.style.display = "block";
        blueTextSvg.style.display = "block";
        body.style.background = "black";
      }, 10);
    }
  });

  $(".black-skull-svg g").mouseleave(function () {
    resetState();
  });
}

function resetState() {
  clearTimeout(timeout);
  body.style.background = "white";
  whiteSkullSvg.style.display = "block";
  blackSkullSvg.style.display = "none";
  transitionSvg.style.display = "none";
  blueTextSvg.style.display = "none";
}

function playAudio() {
  document.getElementById("audio1").play();
  document.getElementById("audio1").muted = false;
}
