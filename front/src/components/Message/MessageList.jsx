import {Grid} from '@mui/material'
import Messages from './Messages'
import Prompt from '../Prompt/Prompt'
const MessageList = ({md,sm,xs}) => {

	return (
		<>
		
                
                <Grid item  sm={sm} xs={12} sx={{  overflow: 'hidden' }}>
                  <Grid container>
                    	<Grid item md={12} xs={12} sm={12} sx={{overflow: 'auto' }}>
                    	 	<Messages />

                    	</Grid>
                    	<Grid item md={12} xs={12} sm={12}>
                    		<Prompt />

                    	</Grid>

                    </Grid>
            	</Grid>
            
		</>
		)

}

export default MessageList;