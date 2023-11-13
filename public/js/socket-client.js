console.log("Hola mundo");

const clientSocket = io();

clientSocket.on('connect', () => {
    console.log("Connect - Client side");
});

clientSocket.on('disconnect', () => {
    console.log("Disconnect - Client side");
});