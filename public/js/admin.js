window.addEventListener('load', function(){
  var socket = io.connect("http://" + window.location.host);

  document.getElementById('poweroff').addEventListener('click', function(){
    socket.emit('poweroff');
  });

  document.getElementById('alarm').addEventListener('click', function(){
    socket.emit('securityon');
  });

  document.getElementById('reset').addEventListener('click', function(){
    socket.emit('reset');
  });
});
