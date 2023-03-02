const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
	 googleId:{
        type:String,
    },
    name : {
        type: String,
        require:true,
    },
    email : {
        type: String,
        require:true,
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