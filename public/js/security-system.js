(function(){

  var on = true;
  var alarmOn = false;
  var socket = io.connect( "http://" + window.location.host );
  var alarmTimer = null;

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

  function toggleAlarm() {
    alarmOn = !alarmOn;
    document.bgColor = alarmOn ? "red" : "black";
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

  socket.on( 'securityon', function() {

    setTimeout( function() {
      alarmTimer = setInterval( function() {
        toggleAlarm();
      }, 1000);
    }, 5000);
    
  });

  socket.on( 'reset', function() {
    turnOn();
    clearInterval( alarmTimer );
  });

})();
