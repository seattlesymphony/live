$(document).ready(function() {

  var authStatus = paywall.isAuthenticated();

  if(authStatus=="true"){

      document.getElementById("custom-login").style.display = "none";
      document.getElementById("custom-register").style.display = "none";
      document.getElementById("custom-account").style.display = "flex";
      document.getElementById("inplayer-menu-content").style.display = "none";
    }
});
