import {Typography,Grid,Container} from '@mui/material'
import Message from './Message'
import { useSelector } from "react-redux/es/exports";
import {useEffect,useState,useRef} from 'react'
import {getAllMessageRoute} from '../../utils/ApiRoutes'
import axios from 'axios'
import {toast} from 'react-toastify'
import {  setMessages } from '../../store/redux'
import { useDispatch } from 'react-redux'

const Conversation = () => {
    const {chat,messages} = useSelector(state => state.users);
    //const [messages,setMessages] = useState([])
    const scrollRef = useRef();
    const dispatch = useDispatch();

     useEffect(() => {
        axios.post(getAllMessageRoute,{ from : chat.from,to: chat.to})
            .then(res => {
                console.log("conversations",res)
                dispatch(setMessages(res.data.data))
            })
            .catch(error=> {
                toast.error(` ${error.message}`,{
                     position: toast.POSITION.TOP_CENTER,
                })
            })

     },[])

    
     //set view conversation on the last message

      useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);


	return(
		<>
		 {
                messages.map((msg,index) => (
                    <Grid
                        ref={scrollRef} 
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