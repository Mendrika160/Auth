import {TextField,Button ,Grid} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {PromptContainer} from './style'
const Prompt = () => {
	return (
		<>
			<Grid container sx={{px : 3}}>
				
				<Grid item md={12} xs={12} sm={12}>
					<PromptContainer>
					 <TextField
					 		fullWidth
		                    required
		                    multiline
		                    id="standard-textarea"
		                    variant="standard" 
		                    placeholder="Write a new message"
		                    
		                />
		                <SendIcon color="primary" sx={{cursor : 'pointer'}} />
		             </PromptContainer>
				</Grid>
			</Grid>
			
		</>
		)
}

export default Prompt ;