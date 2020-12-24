$(document).ready(function() {
  var paragraph = document.getElementById("welcome-message");
  var user = getCurrentUser();
  paragraph.textContent += user;
  paragraph.textContent += "!";

  $("#login-button-user").click(checkUserPassword);

  $("#input-login-user").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      checkUserPassword();
    }
  });
});

function getPassword(user) {
  switch(user) {
    case 'Maria Elena':
      return 'neuro'
    case 'Alessandra':
      return 'ernia'
    case 'Francesca':
      return 'annaghj'
    case 'Marianna':
      return 'bmw'
    case 'Alessia':
      return 'annaghj'
    case 'Irene':
      return 'unicorni'
    case 'Martina':
      return 'madonna'
    case 'Rosanna':
      return 'mattone'
    case 'Roberto':
      return 'brunori'
    case 'Arianna':
      return 'adoro'
    case 'Sciortino':
      return 'mostro'
    case 'Carolina':
      return 'danish'
    case 'Giovanni':
      return 'spinoza'
    case 'Tommaso':
      return 'oki'
    case 'Gabriele':
      return 'unipol'
    case 'Carlotta':
      return 'belin'
    case 'Nicolò':
      return 'cicca'
    case 'Miner':
      return 'fatturare'
    case 'Valentino':
      return 'sonobello'
    default:
      return 'magimagia'
  }
}

function checkUserPassword() {
  var user = getCurrentUser();
  var song = getSong(user);
  var psw = getPassword(user);
  if($("input[name='pwd']").val() === psw){
    location.href = 'sarabanda.html?user=' + user + '&song=' + song;
  } else{
    alert("Ops! Parola d'ordine sbagliata.");
  }
  return true;
}