import {TextField,Button ,Grid} from '@mui/material'
import {PromptContainer} from './style'
const Prompt = () => {
	return (
		<>
			<Grid container fullWidth>
				
				<Grid item>
					<PromptContainer>
					 <TextField
		                    required
		               
		                    id="email"
		                    
		                    variant="outlined" 
		                    name="email"
		                    sx={{ mt: 3, mb: 2 }}
		                />
		                <Button variant='contained'>Send</Button>
		             </PromptContainer>
				</Grid>
			</Grid>
			
		</>
		)
}

export default Prompt ;