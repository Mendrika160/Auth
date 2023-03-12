import {Grid} from '@mui/material'
import Messages from './Messages'
import Prompt from '../Prompt/Prompt'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {useEffect,useRef,useState} from 'react'
import {io} from 'socket.io-client'
import host from '../../utils/ApiRoutes'
import {addArrivalMessage} from '../../store/redux'


const MessageList = ({md,sm,xs}) => {
	const dispatch = useDispatch()
	const {selectedPerson,messages} = useSelector((state) => state.users);
	const socket = useRef();
	//const [arrivalMessage,setArrivalMessage] = useState(null)
	

	 // socket
    
    useEffect(() => {
        if(selectedPerson){
            socket.current = io(host);
            socket.current.emit("add-user",selectedPerson)
            console.log('Selectedperson',selectedPerson)
        }

    },[selectedPerson])


	return (
		<>
		
                
                <Grid item  sm={sm} xs={12} sx={{  overflow: 'hidden' }}>
                  <Grid container>
                    	<Grid item md={12} xs={12} sm={12} sx={{overflow: 'auto' }}>
                    	 	<Messages />

                    	</Grid>
                    	<Grid item md={12} xs={12} sm={12}>
                    		{socket.current && <Prompt socket={socket.current} />}

                    	</Grid>

                    </Grid>
            	</Grid>
            
		</>
		)

}

export default MessageList;