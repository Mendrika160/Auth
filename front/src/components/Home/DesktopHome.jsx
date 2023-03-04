import {Grid,Paper} from '@mui/material'
import PersonList from '../Person/PersonList'
import Messages from '../Message/Messages'
import Prompt from './Prompt'
const DesktopHome = () => {

	const  example = [0,1,2,3,4,5,6,7,8,9,10,11,12] ;
	const userClick = (user) => {
        console.log("user")
    }

	return(
		<>
			<Grid container component={Paper} sx={{  height: 'auto'}}>
                <Grid item md={3} sm={3} sx={{ borderRight: '1px solid #e0e0e0', overflow: 'hidden' }}>
                 	<PersonList />                    
                </Grid>
                <Grid 
                    item md={9} sm={9}

                    >
                    <Grid container>
                    	<Grid item md={12} sx={{overflow: 'auto' }}>
                    	 	<Messages />

                    	</Grid>
                    	<Grid item md={12}>
                    		<Prompt />

                    	</Grid>

                    </Grid>
                                       
                </Grid>
            </Grid>
		</>
		)

}

export default DesktopHome;