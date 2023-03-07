const mongoose = require('mongoose');

const MessageSchema =  new mongoose.Schema({
    message: {

    	text:{
            type:String,
            required:true,
        },
    },
    users : Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },

   
    createdAt: {
        type: Date,
        default: Date.now
    },

},{timestamps: true})

module.exports = mongoose.model('Message',MessageSchema)