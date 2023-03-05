import {Grid,Paper} from '@mui/material'


import MessageList from '../Message/MessageList'

import ListPersonModal from '../Person/ListPersonModal'
const DesktopHome = () => {

	

	return(
		<>
			<Grid container component={Paper} sx={{  height: 'auto'}}>
                <ListPersonModal md={3} sm={3} borderRight='1px solid #e0e0e0'/>
                <MessageList md={9} sm={9}/>
                
            </Grid>
		</>
		)

}

export default DesktopHome;