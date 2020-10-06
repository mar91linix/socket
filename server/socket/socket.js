const {io} = require('../server');

io.on('connection',  (client) => {

    console.log('usuario conectado');

    client.emit('saludarUsuario',{
    user: 'Administardor',
    message: 'Bienvenido a la aplicacion'
});
    client.on('disconnect' , ( ) => {
        console.log('usuario desconectado');
    });

    //escuchar al cliente

    client.on('enviarMensaje', (data) => {
        console.log(data);

        client.broacast.emit('saludarUsuario',data);

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