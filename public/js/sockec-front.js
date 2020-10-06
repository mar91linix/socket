

    var socket = io();



socket.on('connect', function () {
        console.log('conectado al servidor');

});

socket.on('disconnect', function () {
        console.log('se ha perdido la conecxion del servidor');
});

socket.emit('enviarMensaje', {
        user: 'David',
    message: 'Hola ,soy yo :)'
}, function(resp) {
        console.log('SERVER', resp);
});

socket.on('saludarUsuario', function(mensaje) {
        console.log('servidor dice:', mensaje);
});
