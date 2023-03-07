import {Typography,Grid,Container} from '@mui/material'
import Message from './Message'
import { useSelector } from "react-redux/es/exports";
import {useEffect,useState} from 'react'
import {getAllMessageRoute} from '../../utils/ApiRoutes'
import axios from 'axios'
import {toast} from 'react-toastify'

const Conversation = () => {
    const {chat} = useSelector(state => state.users);
    const [messages,setMessages] = useState([])
	 const conversations  = [
        {id: 1, sender: 'user 1', text: 'Hello',date: '22h:30'},
        {id: 2, sender: 'me', text: 'Hi there!',date: '22h:34'},
        {id: 3, sender: 'user 1', text: 'How are you?',date: '23h:30'},
        {id: 4, sender: 'me', text: 'I am doing well, thanks!',date: '23h:40'},
        {id: 5, sender: 'user 1', text: 'That is great to hear!',date: '23h:50'},
        {id: 6, sender: 'me', text: 'Yes, it is.',date: '23:55'},
    ];

     useEffect(() => {
        axios.post(getAllMessageRoute,{ from : chat.from,to: chat.to})
            .then(res => {
                console.log("conversations",res)
                setMessages(res.data.data)
            })
            .catch(error=> {
                toast.error(` ${error.message}`,{
                     position: toast.POSITION.TOP_CENTER,
                })
            })

     },[chat])

     useEffect(() => {
        console.log('messages',messages)
        messages.map(msg => {
            return console.log("msg: ",msg.message)
        })
     },[messages])
	return(
		<>
		 {
                messages.map((msg,index) => (
                    <Grid 
                        key={index}
                        container
                        justifyContent={msg.fromSelf ? "flex-end" : 'flex-start'}
                        
                          >
                        
                        <Grid item >
                         <Message message={msg.message} sender={msg.fromSelf} />
                        
                         <Typography 
                            variant="caption"
                            sx={{
                                    float: msg.fromSelf? 'right' : 'left',

                                    fontSize: '9px',
                                    marginTop:'2px'
                                }}

                         >
                             date here
                         </Typography> 
                        </Grid>
                    </Grid>
                        ))
                        
            }
		</>
	)
}

export default Conversation