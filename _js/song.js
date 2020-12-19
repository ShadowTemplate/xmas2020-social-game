$(document).ready(function() {
  var paragraph = document.getElementById("welcome-message");
  var user = getCurrentUser();
  paragraph.textContent += user;
  paragraph.textContent += "!";

  var audioDiv = document.getElementById("audio-div");
  audioDiv.innerHTML = '' +
      '<audio controls>' +
      '<source src="assets/mp3/' + getCurrentSong() + '" type="audio/mpeg">' +
      'Your browser does not support the audio element.' +
      '</audio>';

  $("#songs-button-user").click(checkSongs);

  $("#input-song1").on('keyup', onInputEntered);
  $("#input-song2").on('keyup', onInputEntered);

});

function checkSongs() {
  var user = getCurrentUser();
  var song = getCurrentSong();
  var title1 = $("input[name='song1']").val();
  var title2 = $("input[name='song2']").val();
  console.log(user);
  console.log(song);
  console.log(title1);
  console.log(title2);
  var correctValues = getSongTitles(song);
  console.log(correctValues[0]);
  console.log(correctValues[1]);
}

function onInputEntered(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    checkSongs();
  }
}
