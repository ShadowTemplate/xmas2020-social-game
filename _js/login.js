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

function getCurrentUser() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  return urlParams.get('user');
}

function getPassword(user) {
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return 'longo'
    default:
      return 'none'
  }
}

function getGamePage(user) {
  // TODO CHECK MARIA ELENA
  switch(user) {
    case 'Stefano':
      return 'stelong.html'
    default:
      return 'none'
  }
}

function checkUserPassword() {
  var user = getCurrentUser()
  var psw = getPassword(user)
  if($("input[name='pwd']").val() === psw){
    location.href = getGamePage(user);
  } else{
    alert("Ops! Parola d'ordine sbagliata.");
  }
  return true;
}