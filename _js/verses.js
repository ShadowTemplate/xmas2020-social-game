$(document).ready(function() {
  var paragraph = document.getElementById("song-paragraph");
  var verse = getCurrentVerse(getCurrentUser());
  console.log(verse);
  paragraph.textContent += verse;
});

