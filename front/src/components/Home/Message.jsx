import {Typography,Grid} from '@mui/material'


function Message() {
    return (
        <>

            <Grid container sx={{ border: '1px solid black',mt: 4,maxWidth : '250px' }}>
               
                <Grid item md={8} >
                    <Typography variant="h5" component="h4">FirstName Lastname</Typography>
                </Grid>
            </Grid>

        </>
    );
}

export default Message;