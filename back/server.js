const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: "./config/config.env" });
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const messageRoute = require('./routes/messageRoute')
const socket = require("socket.io");
const port = process.env.PORT || 3000;





//db 

connectDB();






//cors
// const corsOptions =  {
// 	origin: ["http://localhost:3000"],
// 	credentials:true,
// }
app.use(cors());


//log request
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}


//parse request to body-parser
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//route

app.use('/auth',authRoute);
app.use('/api',userRoute);
app.use('/message',messageRoute);


app.use(function(err, req, res, next) {
  console.error("error stack",err.stack);
  res.status(500).send('Something broke!');
});

//server
const server = app.listen(port,() =>{
	console.log(`Server running on ${port}` )

})

//the webSocket
const io = socket(server,{
	cors:{
		origin: ["http://localhost:3000"],
		credentials:true,
	}
})

global.onlineUsers = new Map();

io.on("connection",(socket) =>{
	global.chatSocket = socket;
	socket.on("add-user",(userId) => {
		console.log('selectedPreson',userId);
		onlineUsers.set(userId,socket.id)
		console.log("onlineUsers",onlineUsers)
	})

	socket.on("send-msg",(data) => {
		console.log(typeof(onlineUsers))
		const sendUserSocket = onlineUsers.get(data.to)
		console.log('sendUserSocket',sendUserSocket)
		console.log("data.to: ",data.to)
		if(sendUserSocket){
			//io.to(sendUserSocket).emit("msg-recieve",data.message)
			console.log("test: ",data.message)
			socket.broadcast.to(sendUserSocket).emit("msg-recieve",data.message);
		}

			
		
	})

	

})

