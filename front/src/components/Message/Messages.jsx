import {Typography,Grid,Container,Box} from '@mui/material'
import Message from './Message'
import Person from '../Person/Person'
function Messages() {
    

    const conversations  = [
        {id: 1, sender: 'user 1', text: 'Hello',date: '22h:30'},
        {id: 2, sender: 'me', text: 'Hi there!',date: '22h:34'},
        {id: 3, sender: 'user 1', text: 'How are you?',date: '23h:30'},
        {id: 4, sender: 'me', text: 'I am doing well, thanks!',date: '23h:40'},
        {id: 5, sender: 'user 1', text: 'That is great to hear!',date: '23h:50'},
        {id: 6, sender: 'me', text: 'Yes, it is.',date: '23:55'},
    ];
    return (
        <>  
            <Person name="user 1"/>

            <Container sx={{
                height : '60vh',
                overflow: 'auto' ,
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0'
            }}>
            {
                conversations.map(conversation => (
                    <Grid 
                        key={conversation.id}
                        container
                        justifyContent={conversation.sender === 'me' ? "flex-end" : 'flex-start'}
                        sx={{mb: 5}}
                          >
                        
                        <Grid item>
                         <Message message={conversation.text}  />
                        
                         <Typography 
                            variant="caption"
                            sx={{
                                    float: conversation.sender === 'me' ? 'right' : 'left',
                                    fontSize: '9px',
                                    marginTop:'2px'
                                }}

                         >
                             {conversation.date}
                         </Typography> 
                        </Grid>
                    </Grid>
                        ))
                        
            }
            </Container>
        </>
    );
}

export default Messages;