const Message = require('../model/message')



const addMessage = async (req,res) => {
	try{
		console.log("body: ",req.body)
		const {from,to,message} = req.body;
		const data = await Message.create({
			message: {text: message},
			users: [from,to],
			sender:from
		})
		if(data){
			res.status(200).send({error : false, message : "Message added successfully"})
		}else{
			res.status(403).send({error : true, message : "Failed to add Message"})
		}

	}catch(error){
		res.status(500).send({error : true, message : error.message})
	}


}

const getAllMessage = async (req,res) => {

	try{
		console.log('req',req.body)
		const {from,to} = req.body;
		const messages = await Message
			.find({
				users: { 
					$all: [from,to],
				},
			})
			.sort({ updatedAt: 1});
		const projectMessages = messages.map((msg) => {
			return {
				fromSelf: msg.sender.toString() === from,
				message: msg.message.text
			}
		})
		res.status(200).send({error : false, message : "Message added successfully",data: projectMessages })



	}catch(err){
		res.status(500).send({error : true, message : error.message})
	}



}



module.exports = {addMessage,getAllMessage} 