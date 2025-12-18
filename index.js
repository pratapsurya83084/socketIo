import express from 'express';
import http from 'http';
import {Server} from 'socket.io';


const path = './public'


const app = express();

const server = http.createServer(app);

const io = new Server(server);
io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit('message',message);
        // console.log("A new User Message",message);
    });
});



 app.use(express.static(path.resolve("./public")));



app.get("/",(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(9000,()=>{
    console.log(`sever is listen on 9000`)
})


