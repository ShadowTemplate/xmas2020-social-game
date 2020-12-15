$(document).ready(function() {
  // console.log('login.js');
  var paragraph = document.getElementById("welcome-message");
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var user = urlParams.get('user');
  paragraph.textContent += user;
  paragraph.textContent += "!";

  $("#login-button-user").click(function() {
    var psw = getPassword(user)
    if($("input[name='pwd']").val() === psw){
      location.href = getGamePage(user);
    } else{
      alert("Ops! Parola d'ordine sbagliata.");
    }
    return true;
  });
});

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