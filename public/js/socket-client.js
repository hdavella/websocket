console.log("Hola mundo");

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

const clientSocket = io();

clientSocket.on('connect', () => {
    console.log("Connect - Client side");

    lblOnline.style.display= '';
    lblOffline.style.display='none';
});

clientSocket.on('disconnect', () => {
    console.log("Disconnect - Client side");

    lblOnline.style.display= 'none';
    lblOffline.style.display='';
});

btnSend.addEventListener('click', ()=>{

    const message = txtMessage.value;
    const payload = {
        msg: message,
        id: "id1234",
        date: new Date().getTime()
    };
    clientSocket.emit('eventFromClient', payload);
});