const {io} = require('../server');

io.on('connection',  (client) => {
    console.log('usuario conectado');

    client.emit('saludarUsuario', {
    user: 'Administrador',
    message: 'Bienvenido a la aplicacion'
});
    client.on('disconnect' , ( ) => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('saludarUsuario', data);

    //     if (mensaje.user) {

    //    callback({
    //        resp: 'Mensaje recibido'
    //    });
       
    // } else {
    //     callback ({
    //         resp:'ERROR : NO SE RECIBIO NINGUN MENSAJE'
    //     });
    // }
    });
});