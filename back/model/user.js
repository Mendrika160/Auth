const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
	 googleId:{
        type:String,
    },
    name : {
        type: String,
        required:true,
    },
    email : {
        type: String,
        required:true,
    },
    password: {
        type: String,
    },
    
    picture: {
    	type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('User',UserSchema)