import {Grid,Paper} from '@mui/material'
import PersonList from '../Person/PersonList'
import Messages from '../Message/Messages'
import Prompt from './Prompt'
import ListPersonModal from '../Person/ListPersonModal'
import { useSelector } from "react-redux/es/exports";

const MobileHome = () => {
	const {modalOpen} = useSelector((state) => state.users);

	return(
		<>{


			modalOpen ? <ListPersonModal /> : 
		

			<Grid container component={Paper} sx={{  height: 'auto'}}>
                
                <Grid item  sm={12} xs={12} sx={{  overflow: 'hidden' }}>
                  <Grid container>
                    	<Grid item md={12} xs={12} sm={12} sx={{overflow: 'auto' }}>
                    	 	<Messages />

                    	</Grid>
                    	<Grid item md={12} xs={12} sm={12}>
                    		<Prompt />

                    	</Grid>

                    </Grid>
            </Grid>
            </Grid>
        }
		</>
		)

}

export default MobileHome;