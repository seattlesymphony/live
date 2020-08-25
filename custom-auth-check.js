// Check if the user is authenticated first

window.checkAuthStatus = (paywall) => {
  var authStatus = false;

  paywall.on('init', (e, { isAuthenticated }) => {
   authStatus = isAuthenticated;
});

// Hide the sign up and sign in buttons and display the account nav

paywall.on('authenticated', () => document.getElementById('custom-login').style.display = 'none');
paywall.on('authenticated', () => document.getElementById('custom-register').style.display = 'none');
paywall.on('authenticated', () => document.getElementById('custom-account').style.display = 'block');
paywall.on('logout', () => location.reload());

};
