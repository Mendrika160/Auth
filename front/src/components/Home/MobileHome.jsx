import {Grid,Paper} from '@mui/material'


import MessageList from '../Message/MessageList'

import ListPersonModal from '../Person/ListPersonModal'
import { useSelector } from "react-redux/es/exports";

const MobileHome = () => {
	const {modalOpen} = useSelector((state) => state.users);

	return(
		<>
			<Grid container component={Paper} sx={{  height: 'auto'}}>

			{modalOpen ? <ListPersonModal sm={12} xs={12}/> : <MessageList sm={12} xs={12}/>}
			</Grid>
        
		</>
		)

}

export default MobileHome;