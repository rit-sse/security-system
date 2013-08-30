(function(){

  var on = true;
  var socket = io.connect( "http://" + window.location.host );

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
  
  window.onLoad = function() {
    turnOn();
  }

  socket.on('poweroff', function (data) {

    var timer = setInterval( function() {
      if( Math.random() > 0.7 ) {
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
