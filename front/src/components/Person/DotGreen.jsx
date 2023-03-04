import {Dot} from './style'
import {Typography} from '@mui/material'

const DotGreen = () => {
	return(
		<>
		<Typography 
			variant="h3"
			component="span"
			sx={{
				 width: '20px',
    			marginBottom: '50px',
    			color: 'green',
    			

			}}
		>.</Typography>
		</>
		)

}

export default DotGreen;