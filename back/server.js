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
const corsOptions =  {
	origin: ["http://localhost:3000"],
	methods: "GET,POST,PUT,DELETE",
	credentials:true,
}
app.use(cors(corsOptions));


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
		...corsOptions
	}
})

global.onlineUsers = new Map();

io.on("connection",(socket) =>{
	global.chatSocket = socket;
	socket.on("add-user",(userId) => {
		onlineUsers.set(userId,socket.id)
	})

	socket.on("send-msg",(data) => {
		const sendUserSocket = onlineUsers.get(data.to)
		console.log('data :',data)
		if(sendUserSocket){
			socket.to(sendUserSocket).emit("msg-receive",data.message)
			console.log("test: ",socket.to(sendUserSocket).emit("msg-receive",data.message))
		}
	})

})