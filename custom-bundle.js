var paywall = new InplayerPaywall("1e87268a-4dd7-46ef-a39f-3a8e193f7173", [
  {
    id: 111402,
    options: {
      brandingId: 1753,
      noPreview: true,
      noInject: true,
    }
  }], {
    hideUserMenu: true
  });

  document.getElementById("custom-login").addEventListener("click", () => {
    paywall.showPaywall({
      asset: {
        assetId: 111402,
      },
    });
  });

  document.getElementById("custom-register").addEventListener("click", () => {
    paywall.showPaywall({
      asset: {
        assetId: 111402,
      },
      registerFirst: true
    });
  });

  paywall.on("authenticated", () => document.getElementById("custom-register").style.display = "none");

  paywall.on("authenticated", () => document.getElementById("custom-login").style.display = "none");

  paywall.on("authenticated", () => document.getElementById("custom-login").style.display = "flex");

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