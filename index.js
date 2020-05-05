addEventListeners();

function addEventListeners() {
  $(".white-skull-svg g").mouseover(function () {
    if ($(".white-skull-svg").is(":visible")) {
      $(".white-skull-svg").hide();
      $(".black-skull-svg").hide();
      $(".transition-svg").show();
    //   playAudio();
      setTimeout(() => {
        $(".transition-svg").hide();
        $(".black-skull-svg").show();
        $(".blue-text-svg").show();
        $("body").css("background", "black");
      }, 200);
    }
  });

  $(".transition-skull-svg g").mouseleave(function () {
    resetState();
  });

  $(".black-skull-svg g").mouseleave(function () {
    resetState();
  });
}

function resetState() {
  $("body").css("background", "white");
  $(".white-skull-svg").show();
  $(".black-skull-svg").hide();
  $(".transition-svg").hide();
  $('.blue-text-svg').hide();
}

function playAudio() {
    document.getElementById('audio1').play();
    document.getElementById('audio1').muted = false;
}