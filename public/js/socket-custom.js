var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on es para escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//los emits con para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});