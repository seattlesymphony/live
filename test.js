var paywall = new InplayerPaywall('c424a964-2c3f-47fc-b10e-b808efbde9e2');

        document.getElementById("login-button").addEventListener("click", () => paywall.showPaywall());
        paywall.on("authenticated", () => document.getElementById("login-button").style.display = "none");

        document.getElementById("register-button").addEventListener("click", () => paywall.showPaywall({ registerFirst: true }));
        paywall.on("authenticated", () => document.getElementById("register-button").style.display = "none");

        paywall.on("logout", () => location.reload());
