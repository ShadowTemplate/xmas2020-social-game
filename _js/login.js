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
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return 'longo'
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