// Check if the user is already authenticated

  window.checkAuthStatus = (paywall) => {
    var authStatus = false;

    paywall.on('init', (e, { isAuthenticated }) => {
     authStatus = isAuthenticated;
  });

  // Hide the sign up and sign in buttons and display the account nav

  paywall.on('authenticated', () => document.getElementById('custom-login').style.display = 'none');
  paywall.on('authenticated', () => document.getElementById('custom-register').style.display = 'none');
  paywall.on('authenticated', () => document.getElementById('custom-account').style.display = 'block');
  paywall.on("logout", () => location.reload());

  };

// Expose the paywall with custom login and register buttons

  // Acess custom login button

  document.getElementById("custom-login").addEventListener("click", () => paywall.showPaywall());

  paywall.on("authenticated", () => document.getElementById("custom-login").style.display = "none");

  // Access custom register button

  document.getElementById("custom-register").addEventListener("click", () => {
    paywall.showPaywall({
      asset: {
        assetId: 111402,
      },
      registerFirst: true,
      hideUserMenu: true
    });
  });

  paywall.on("authenticated", () => document.getElementById("custom-register").style.display = "none");

  paywall.on("authenticated", () => document.getElementById("custom-account").style.display = "block");

  paywall.on("logout", () => location.reload());

// Open and close mobile navmenu

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
