const id = JSON.parse(document.getElementById('json-username').textContent);
const message_username = JSON.parse(document.getElementById('json-message-username').textContent);

const socket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/'
    + id
    + '/'
);


socket.onopen = function(e){
    console.log("CONNECTION ESTABLISHED");

}
socket.onclose = function(e){
    console.log("CONNECTION LOST")
}

socket.onerror = function(e){
    console.log(e);
}

socket.onmessage = function(e){
    console.log(e);
}