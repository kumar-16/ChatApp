var socket = io();

socket.on('connect', function(){
    console.log('connected to the server');

    socket.emit('createMessage' , {
        from: 'Aman',
        text: 'Hello, I successfully sent this message'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage' , function (message) {
   console.log('newMessage : ' , message);
});
