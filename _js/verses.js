$(document).ready(function() {
  var paragraph = document.getElementById("song-paragraph");
  var song = getSongVerses(getCurrentUser());
  paragraph.innerHTML += song;
});

