
import {AppBar,Toolbar,IconButton,Box,Typography,Badge} from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconMenuContainer} from './style'

const Navbar = () => {
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
	return(
		<>
		<AppBar position="fixed">
			<Toolbar>

				<Typography variant="h4" sx={{ mt: 2}}>Chat </Typography>
					<IconMenuContainer>
	         <IconButton
		          size="large"
		          aria-label="show 17 new notifications"
		          color="inherit"
		          sx={{display : { xs : 'flex',sm: 'flex',md: 'none'}}}
		        >
		          <Badge badgeContent={1} color="error">
		            <PersonIcon />
		          </Badge>
	        </IconButton>

	        <IconButton
		          size="large"
		          aria-label="show 17 new notifications"
		          color="inherit"
		          sx={{display : { xs : 'flex',sm: 'flex',md: 'none'}}}
		        >
		          <Badge badgeContent={17} color="error">
		            <MessageIcon />
		          </Badge>
	        </IconButton>

	        <IconButton
		          size="large"
		          aria-label="show 17 new notifications"
		          color="inherit"
		          sx={{marginLeft: 'auto',}}
		        >
		          
		            <LogoutIcon />
	        </IconButton>
	        </IconMenuContainer>


			</Toolbar>
			
		</AppBar>

		</>
	)
}

export default Navbar