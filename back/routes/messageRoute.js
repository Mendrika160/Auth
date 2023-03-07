const router = require('express').Router();
const {addMessage,getAllMessage} = require('../controller/MessagesController');

router.post('/send-message',addMessage)
router.post('/getAllMessage',getAllMessage)


module.exports = router;