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
      return '3.mp3'
    default:
      return 'none'
  }
}

function getSongTitles(song) {
  // TODO CHECK MARIA ELENA
  switch(song) {
    case '1.mp3':
      return ['a', 'b']
    default:
      return 'none'
  }
}