videojs.registerPlugin('liveCustomError', function() {
  var myPlayer = this,
    // Initialize boolean variable so overlay not shown be default
    showOverlay = false;

  // ### Overlay definition ###
  // Define when the overlay should be displayed
  // and what it will display
  myPlayer.overlay({
    overlays: [{
      "start": "loadstart",
      "end": "ended",
      "content": "<img src='https://seattlesymphony.canto.com/direct/image/5jhh4cf7b524pchl98mv2lj04e/6ZZoVHHAdZyiIbW0qb-mfl9WqXE/original'>"
    }]
  });

  // ### Modify default error message ###
  // Redefine the messages displayed by the error
  // THIS ERROR WILL NOT BE DISPLAYED unless you don't implement the overlay image
  // or if the overlay fails to load the image for some reason
  myPlayer.errors({
    'errors': {
      '4': {
        'headline': 'The Live Event you are trying to watch is either unavailable or has not yet started.',
        'type': 'MEDIA_UNAVAILABLE',
      }
    }
  });

  // ### Listen for an error event ###
  myPlayer.on('error', function(err) {
    // The overlay should only be displayed if the error code is 4 or 2
    // AND the duration is NaN (not a number), which means no video has loaded
    // The following code gets the error code and duration
    var errNo = myPlayer.error().code;
    var duration = myPlayer.duration();
    // Check if the error code and duration means no video has loaded
    if (((errNo == '2') && (isNaN(duration))) || ((errNo == '4') && (isNaN(duration)))) {
      // If conditions met, set display boolean variable to true
      showOverlay = true;
    }
    // Check if overlay should be displayed
    if (showOverlay) {
      // Prevent the default error display from appearing
      myPlayer.error(null);
      // Remove the hide-overlay so the image appears
      myPlayer.removeClass("hide-overlay");
    } else {
      // Hide overlay image if based on boolean variable
      myPlayer.addClass("hide-overlay");
    }
  })


});
