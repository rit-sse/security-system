(function(){

  var on = true;

  function setPower( body, power ) {
    on = power;
    if( on ) {
      body.classList.add("powerOn");
    } else {
      body.classList.remove("powerOn");
    }
  }

  function turnOn( body ) {
    setPower( body, true );
  }

  function turnOff( body ) {
    setPower( body, false );
  }

  function togglePower( body ) {
    setPower( body, !on );
  }

  window.onload = function() {

    var socket = io.connect( "http://" + window.location.host );
    var alarmTimer = null;

    var body = document.getElementsByTagName("body")[0];
    var alarm = document.getElementById( "alarm" );
    var theme = document.getElementById( "theme" );

    body.classList.add("powerOn");

    socket.on('poweroff', function (data) {

      setTimeout( function() {
        theme.play();
      }, 1000 );

      var timer = setInterval( function() {
        if( Math.random() > 0.7 ) {
          body.classList.toggle("powerOn");
        }
      }, 20 );

      setTimeout( function() {
        clearInterval( timer );
        turnOff( body );
      }, 700 );
      
    });

    socket.on( 'securityon', function() {
      body.classList.add( "loading" );

      theme.pause();
      theme.currentTime = 0;

      setTimeout( function() {

        alarmTimer = setInterval( function() {
          alarm.play();
          body.classList.remove("loading");
          body.classList.toggle("alarm");
        }, 1000);

      }, 2000);
      
    });

    socket.on( 'reset', function() {
      body.className = "";
      body.classList.add("powerOn")
      clearInterval( alarmTimer );
      alarm.pause();
      alarm.currentTime = 0;
    });

  };


})();
