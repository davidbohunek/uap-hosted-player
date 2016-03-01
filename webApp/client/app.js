(function() {

  var app = WinJS.Application;
  var activation = Windows.ApplicationModel.Activation;
  app.onactivated = function(args) {
    if (args.detail.kind === activation.ActivationKind.launch) {
      var playerElement = document.getElementById('mediaPlayer');
      var player = new UapPlayer.Player(playerElement);
      player.play('http://mediadl.microsoft.com/mediadl/iisnet/smoothmedia/Experience/BigBuckBunny_720p.ism/Manifest');
    }
  };
  app.oncheckpoint = function(args) {};
  app.start();
})();
