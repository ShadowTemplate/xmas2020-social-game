function getCurrentUser() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get('user');
}

function getCurrentSong() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get('song');
}

function getSong(user) {
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return '1.mp3'
    default:
      return 'Ops! Qualcosa non va. Per favore contattaci con un messaggio.'
  }
}

function getCurrentVerse(user) {
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return 'Have yourself a merry little Christmas'
    default:
      return 'Ops! Qualcosa non va. Per favore contattaci con un messaggio.'
  }
}

function getSongTitles(song) {
  switch(song) {
    case '1.mp3':
      return ['in da club', 'boulevard of broken dreams']
    case '2.mp3':
      return ['una vita da mediano', 'boulevard of broken dreams']
    case '3.mp3':
      return ['mi fido di te', "you're beautiful"]
    case '4.mp3':
      return ['vieni con me', "cuore nero"]
    case '5.mp3':
      return ['alghero', "tanti auguri"]
    default:
      return ['', '']
  }
}
