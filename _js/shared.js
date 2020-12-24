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
  switch(user) {
      case 'Mirco':
          return '3.mp3'
      case 'Stefano':
          return '1.mp3'
      case 'Gabripo':
          return '2.mp3'
      case 'Andrea':
          return '4.mp3'
      case 'Cara':
          return '4.mp3'
      case 'Eleonora':
          return '5.mp3'
      case 'Sara':
          return '3.mp3'
      case 'Lorenzo':
          return '1.mp3'
      case 'Caterina':
          return '2.mp3'
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
    case 'Martina':
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
    case 'Gabriele':
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


function getGameSong() {
  return [
      "Ah, aha",
      "Ooh, ohh",
      "Ohh",
      "Last Christmas, I gave you my heart",
      "But the very next day, you gave it away",
      "This year, to save me from tears",
      "I'll give it to someone special",
      "Last Christmas, I gave you my heart",
      "But the very next day, you gave it away (you gave it away)",
      "This year, to save me from tears",
      "I'll give it to someone special (special)",
      "Once bitten and twice shy",
      "I keep my distance, but you still catch my eye",
      "Tell me, baby, do you recognize me?",
      "Well, it's been a year, it doesn't surprise me",
      "'Merry Christmas' I wrapped it up and sent it",
      "With a note saying, 'I love you', I meant it",
      "Now I know what a fool I've been",
      "But if you kissed me now, I know you'd fool me again",
      "Last Christmas, I gave you my heart",
      "But the very next day, you gave it away (you gave it away)",
      "This year, to save me from tears",
      "I'll give it to someone special (special)",
      "Last Christmas, I gave you my heart",
      "But the very next day, you gave it away",
      "This year, to save me from tears",
      "I'll give it to someone special (special, oh)",
      "Oh, oh, baby",
      "A crowded room, friends with tired eyes",
      "I'm hiding from you and your soul of ice",
      "My God, I thought you were someone to rely on",
      "Me? I guess I was a shoulder to cry on",
      "A face of a lover with a fire in his heart",
      "A man under cover but you tore me apart",
      "Ooh-hoo",
      "Now I've found a real love, you'll never fool me again",
      "Last Christmas, I gave you my heart",
      "But the very next day, you gave it away (you gave it away)",
      "This year, to save me from tears",
      "I'll give it to someone special (special)",
      "Last Christmas, I gave you my heart (I gave you my heart)",
      "But the very next day, you gave it away (you gave me away)",
      "This year, to save me from tears (Ohh)",
      "I'll give it to someone special (special)",
      "A face of a lover with a fire in his heart (I gave you my heart)",
      "A man under cover but you tore him apart",
      "Maybe next year",
      "I'll give it to someone, I'll give it to someone special",
      "Special...",
      "Someone..."
  ]
}

function getSongVerses(user) {
    var indices = getCurrentVerseNumbers(user);
    var song = getGameSong();
    var highlightedSong = ''
    for (i = 0; i < song.length; i++) {
        if (indices.includes(i)) {
            highlightedSong += '<mark>&nbsp;' + song[i] + '&nbsp;</mark><br>';
        } else {
            highlightedSong += song[i] + '<br>';
        }
    }
    return highlightedSong
}

function getCurrentVerseNumbers(user) {
  switch(user) {
      case 'Mirco':
          return [40, 41]
      case 'Stefano':
          return [5, 6]
      case 'Gabripo':
          return [42, 43]
      case 'Andrea':
          return [32, 33]
      case 'Cara':
          return [3, 4]
      case 'Eleonora':
          return [15, 16]
      case 'Sara':
          return [17, 18]
      case 'Lorenzo':
          return [23, 24]
      case 'Caterina':
          return [25, 26, 27, 34, 35]
    case 'Maria Elena':
      return [7, 8]
    case 'Alessandra':
      return [9, 10]
    case 'Francesca':
      return [13, 14]
    case 'Marianna':
      return [36, 37]
    case 'Alessia':
      return [13, 14]
    case 'Irene':
      return [11, 12]
    case 'Martina':
      return [44, 45]
    case 'Rosanna':
      return [36, 37]
    case 'Roberto':
      return [19, 20]
    case 'Arianna':
      return [21, 22]
    case 'Sciortino':
      return [28, 29]
    case 'Carolina':
      return [36, 37]
    case 'Giovanni':
      return [38, 39]
    case 'Tommaso':
      return [38, 39]
    case 'Gabriele':
      return [30, 31]
    case 'Carlotta':
      return [30, 31]
    case 'Nicolò':
      return [28, 29]
    case 'Miner':
      return [38, 39]
    case 'Valentino':
      return [38, 39]
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
