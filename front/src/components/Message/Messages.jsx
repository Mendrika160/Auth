import {Typography,Grid,Container} from '@mui/material'
import Message from './Message'
import Person from '../Person/Person'
import Welcome from './Welcome'

import {useEffect} from 'react'
import Conversation from './Conversation'
function Messages() {
    
    //const {selectedPerson} = useSelector((state) => state.users);
   

   

    return (
        <>  
            <Person name="user 1"/>

            <Container sx={{
                height : '60vh',
                overflow: 'auto' ,
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',

            }}>
             <Conversation /> 
            
            </Container>
        </>
    );
}

export default Messages;