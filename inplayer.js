var paywall = new InplayerPaywall("1e87268a-4dd7-46ef-a39f-3a8e193f7173", [
  {
    id: 111402,
    options: {
      brandingId: 1753,
      noPreview: true,
      noInject: true,
    },
  },
]);

document.getElementById("custom-register").addEventListener("click", () => {
  paywall.showPaywall({
    asset: {
      assetId: 111402,
    },
  });
});

paywall.on("inject", () => {
  document.getElementById("custom-register").style.display = "none";
});

paywall.on("logout", () => {
  document.getElementById("custom-register").style.display = "inline-block";
});
