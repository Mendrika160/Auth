import {TextField ,Grid,Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {PromptContainer} from './style'
import EmojiPickerComponent from './EmojiPickerComponent'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { getMessage,setMessages,addArrivalMessage} from '../../store/redux'
import {sendMessageRoute} from '../../utils/ApiRoutes'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'


const Prompt = ({socket}) => {
	const {chat,messages} = useSelector(state => state.users);
	const [message,setMessage] = useState("");
	const [arrivalMessage,setArrivalMessage] = useState(null)
	const [isSend,setIsSend] = useState(false)
	const dispatch = useDispatch();


	const emojiClick = (emoji) => {
		console.log('emoji',emoji);

	}
	const handleMessageChange = (e) => {
		setMessage(e.target.value)
		dispatch(getMessage(e.target.value))
	

	}

	const sendMessage = (e) => {
		e.preventDefault();
				
		axios.post(sendMessageRoute,chat)
			.then(res => { 
				socket.emit("send-msg",chat)
				console.log("when socket send",socket)  
				const msgs = [...messages]
				msgs.push({fromSelf: true,message: message}) 
				dispatch(setMessages(msgs))
				setMessage("");
				setIsSend(prevState => !prevState);
			

			})
			.catch(error => {
				toast.error(` ${error.message}`,{
					 position: toast.POSITION.TOP_CENTER,
				})
			})
			
	}
	
	
	
	useEffect(() => {
			console.log("isSend",isSend)
		
			socket.on("msg-recieve",(message) => {
				console.log("mandeha")
				setArrivalMessage({fromSelf: false,message:message})
				console.log('msg-receive... ',message)

			})
		

	},[isSend])



	useEffect(() => {
		console.log('arrival message ',arrivalMessage)
		arrivalMessage && dispatch(addArrivalMessage(arrivalMessage))
		
	},[arrivalMessage,dispatch])

	
	return (
		<>
			<Grid container sx={{px : 3}}>
				
				<Grid item md={12} xs={12} sm={12}>
					<PromptContainer>
					<EmojiPickerComponent />
					<form onSubmit={sendMessage}>
					 <TextField
					 		fullWidth
		                    required
		                    multiline
		                    id="standard-textarea"
		                    variant="standard" 
		                    placeholder="Write a new message"
		                    onChange={handleMessageChange}
		                    value={message}
		                    
		                />
		                <Button type="submit">
		                <SendIcon color="primary" sx={{cursor : 'pointer'}}  />
		                </Button>
		            </form>
		             </PromptContainer>
				</Grid>
			</Grid>
			
		</>
		)
}

export default Prompt ;