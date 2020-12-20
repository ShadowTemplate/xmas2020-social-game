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
  var title1 = $("input[name='song1']").val().toLowerCase();
  var title2 = $("input[name='song2']").val().toLowerCase();
  var correctValues = getSongTitles(song);
  var found1 = title1 === correctValues[0] || title1 === correctValues[1];
  var found2 = title2 === correctValues[0] || title2 === correctValues[1];
  if (! found1 && ! found2) {
    alert("Ops, 0 su 2! Qui qualcuno non si è impegnato abbastanza.");
  } else if (!found1 || !found2) {
    alert("1 su due, fuochino!");
  } else {
    location.href = 'clip.html?user=' + user;
  }
}

function onInputEntered(e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    checkSongs();
  }
}
