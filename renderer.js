import { NT4_Client } from "./NT4.js";

const WebSocket = require('ws');
const ws = new WebSocket('ws://10.20.79.2:8888/networktables/ws');

ws.onopen = function(){
    console.log('WebSocket Client Connected');
};

ws.onmessage = function(event){
    const data = JSON.parse(event.data);
    console.log('Data recieved', data);
};

ws.onclose = function(){
    console.log('WebSocket Connection Closed');
};

ws.onerror = function(error){
    console.log('WebSocket Connection Error: ', error);
};

setupWebSocket(); 

function handleButtonClick(event) {
    console.log('Button clicked', event.target.id);
}

docuument.addEventListener('DOMContentLoaded', (event)  => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}); 
