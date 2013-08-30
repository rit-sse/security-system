module.exports = function(io){
  io.sockets.on('connection', function(socket){

    // Mirror power off command to all clients
    socket.on('poweroff', function(data){
      io.sockets.emit('poweroff');
    });

    // Mirror security on command to all clients
    socket.on('securityon', function(data){
      io.sockets.emit('securityon');
    });

    socket.on('reset', function(data){
      io.sockets.emit('reset');
    });

  });   
}
