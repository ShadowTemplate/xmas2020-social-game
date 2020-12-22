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
    case 'Maria Elena':
      return '3.mp3'
    case 'Alessandra':
      return '1.mp3'
    case 'Francesca':
      return '3.mp3'
    case 'Marianna':
      return '5.mp3'
    case 'Alessia':
      return '1.mp3'
    case 'Irene':
      return '3.mp3'
    case 'Marta':
      return '5.mp3'
    case 'Rosanna':
      return '5.mp3'
    case 'Roberto':
      return '2.mp3'
    case 'Arianna':
      return '3.mp3'
    case 'Sciortino':
      return '5.mp3'
    case 'Carolina':
      return '5.mp3'
    case 'Giovanni':
      return '5.mp3'
    case 'Tommaso':
      return '1.mp3'
    case 'GabrieleD':
      return '1.mp3'
    case 'Carlotta':
      return '5.mp3'
    case 'Nicolò':
      return '5.mp3'
    case 'Miner':
      return '5.mp3'
    case 'Valentino':
      return '3.mp3'
    default:
      return 'Ops! Qualcosa non va. Per favore contattaci con un messaggio.'
  }
}

function getCurrentVerse(user) {
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return 'Have yourself a merry little Christmas'
    case 'Maria Elena':
      return 'Last Christmas, I gave you my heart\n' +
          'But the very next day, you gave it away (you gave it away)\n'
    case 'Alessandra':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
    case 'Francesca':
      return 'Tell me, baby, do you recognize me?\n' +
          'Well, it\'s been a year, it doesn\'t surprise me\n'
    case 'Marianna':
      return 'Last Christmas, I gave you my heart\n' +
          'But the very next day, you gave it away (you gave it away)\n'
    case 'Alessia':
      return 'Tell me, baby, do you recognize me?\n' +
          'Well, it\'s been a year, it doesn\'t surprise me\n'
    case 'Irene':
      return 'Once bitten and twice shy\n' +
          'I keep my distance, but you still catch my eye\n'
    case 'Marta':
      return 'A face of a lover with a fire in his heart (I gave you my heart)\n' +
          'A man under cover but you tore him apart\n'
    case 'Rosanna':
      return 'Last Christmas, I gave you my heart\n' +
          'But the very next day, you gave it away (you gave it away)\n'
    case 'Roberto':
      return 'Last Christmas, I gave you my heart\n' +
          'But the very next day, you gave it away (you gave it away)\n'
    case 'Arianna':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
    case 'Sciortino':
      return 'A crowded room, friends with tired eyes\n' +
          'I\'m hiding from you and your soul of ice\n'
    case 'Carolina':
      return 'Last Christmas, I gave you my heart\n' +
          'But the very next day, you gave it away (you gave it away)\n'
    case 'Giovanni':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
    case 'Tommaso':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
    case 'GabrieleD':
      return 'My God, I thought you were someone to rely on\r\n' + 'Me? I guess I was a shoulder to cry on\n'
    case 'Carlotta':
      return 'My God, I thought you were someone to rely on\n' +
          'Me? I guess I was a shoulder to cry on\n'
    case 'Nicolò':
      return 'A crowded room, friends with tired eyes\n' +
          'I\'m hiding from you and your soul of ice\n'
    case 'Miner':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
    case 'Valentino':
      return 'This year, to save me from tears\n' +
          'I\'ll give it to someone special (special)\n'
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
