import {Typography,Grid} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';

function PersonList() {
    return (
        <>
            <Grid container sx={{ border: '1px solid black' }}>
                <Grid item md={4} >
                    <GoogleIcon />
                </Grid>
                <Grid item md={8} >
                    <Typography variant="h5" component="h4">FirstName Lastname</Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default PersonList;