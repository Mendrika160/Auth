import {Typography,Grid} from '@mui/material'

import {WelcomeContainer} from './style'
const Welcome = ({md,sm,xs}) => {

	return(
		<>
			<Grid item md={md} sm={sm} xs={xs} >
                 	<Typography 
                 		variant="h2" 
                 		sx={{
                 			display:'flex',
                 			alignItems: 'center',
                 			justifyContent:'center',
                 			pt:20,
                 			px:1
                 		}}>Welcome to You</Typography>                  
                </Grid>
			
		</>
	)

}

export default Welcome;