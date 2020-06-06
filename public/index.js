let socket=io();
let boomBtn=document.getElementById('boom');

boomBtn.onclick=function(){

    socket.emit('boom');
}
socket.on('whizzz',()=>
{
    let div=document.createElement('div');
    div.innerText='whizz';
    document.body.appendChild(div);
})