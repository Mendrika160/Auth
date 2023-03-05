import {Grid} from '@mui/material'

import PersonList from './PersonList'

const ListPersonModal = ({md,sm,xs,borderRight}) => {
	
	

	return (
		<>
			
                <Grid item md={md} sm={sm} xs={xs} sx={{ overflow: 'hidden',borderRight: borderRight && borderRight }}>
                 	<PersonList />                    
                </Grid>
            
		</>
		)
}

export default ListPersonModal;