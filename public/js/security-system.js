(function(){

  var on = true;

  function setPower( power ) {
    on = power;
    document.bgColor = on ? "white" : "black";
  }

  function turnOn() {
    setPower( true );
  }

  function turnOff() {
    setPower( false );
  }

  function togglePower() {
    setPower( !on );
  }
  
  console.log( "http://" + window.location.host );
  var socket = io.connect( "http://" + window.location.host );

  window.onLoad = function() {
    turnOn();
  };

  socket.on('poweroff', function (data) {

    var timer = setInterval( function() {
      var rand = Math.random();
      if( rand > 0.7 ) {
        togglePower();
      }
    }, 20 );

    setTimeout( function() {
      clearInterval( timer );
      turnOff();
    }, 700 );
    
  });

  socket.on( 'reset', turnOn );

})();
