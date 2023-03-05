import {Typography,Grid} from '@mui/material'


function Message({message,sender}) {
    return (
        <>

            <Grid 
                container

                sx={{ 
                    border: '1px solid #e0e0e0',
                    borderRadius:'10px',
                    mt: 4,
                    maxWidth : '250px' ,
                    backgroundColor: sender === 'me' && '#113f67' ,
                    p:1,
                }}
                    >
               
                <Grid item >
                    <Typography 
                        variant="body-2"
                        sx={{marginLeft: 'auto',color: sender === 'me' && '#fff' ,}} 
                        component="p"

                        >
                        {message}

                    </Typography>
                </Grid>
                
            </Grid>

        </>
    );
}

export default Message;