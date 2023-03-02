import {Typography,Grid} from '@mui/material'
import Message from './Message'

function Messages() {
    const conversations  = [1,2,3,4,5,6,7,8,9,10]
    return (
        <>
            <Typography variant='body-2' component="p"> Name </Typography>
            {
                conversations.map(conversation => (
                    <Message key={conversation}/>
                    ))
            }
        </>
    );
}

export default Messages;