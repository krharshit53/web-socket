const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server);

io.on('connection',(socket)=>{
    console.log('connected with socket id= ',socket.id);

    socket.on('boom',()=>
    {
        console.log('boom recieved on :',socket.id)
    })
    setInterval(()=>
    {
        socket.emit('whizzz');
    },2000)
})

app.use('/',express.static(__dirname+'/public'));

server.listen(3344,()=>
{
    console.log('server started on http://localhost:'+3344);
})
