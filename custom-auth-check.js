var paywall = new InplayerPaywall("1e87268a-4dd7-46ef-a39f-3a8e193f7173",
     [
      {
        id: 111402,
        options: {
            noPreview: true,
            noInject: true
        }
      }]
    );

// Check if the user is authenticated first

document.addEventListener('DOMContentLoaded', () => {

var authStatus = new paywall.isAuthenticated();

if(authStatus == true){

    document.getElementById("custom-login").style.display = "none";
    document.getElementById("custom-register").style.display = "none";
    document.getElementById("custom-account").style.display = "block";
    document.getElementById("inplayer-menu-content").style.display = "none";
  }
});
