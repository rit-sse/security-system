module.exports = function(io){
  io.sockets.on('connection', function(socket){

    // Mirror power off command to all clients
    socket.on('poweroff', function(data){
      socket.broadcast.emit('poweroff');
    });

    // Mirror security on command to all clients
    socket.on('securityon', function(data){
      socket.broadcast.emit('securityon');
    });

  });   
}
