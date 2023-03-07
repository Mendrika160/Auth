import {TextField ,Grid,Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {PromptContainer} from './style'
import EmojiPickerComponent from './EmojiPickerComponent'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { getMessage} from '../../store/redux'
import {sendMessageRoute} from '../../utils/ApiRoutes'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'


const Prompt = () => {
	const {chat} = useSelector(state => state.users);
	const [message,setMessage] = useState("");
	const dispatch = useDispatch();

	const emojiClick = (emoji) => {
		console.log('emoji',emoji);

	}
	const handleMessageChange = (e) => {
		setMessage(e.target.value)
		//dispatch(getMessage(e.target.value))
		console.log('message', message);

	}

	const sendMessage = (e) => {
		e.preventDefault();
				
		axios.post(sendMessageRoute,chat)
			.then(res => {
				setMessage(""); 
				console.log(res)})
			.catch(error => {
				toast.error(` ${error.message}`,{
					 position: toast.POSITION.TOP_CENTER,
				})
			})
	}

	useEffect(() => {
		console.log('chat state in Prompt', chat);

	},[chat])
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