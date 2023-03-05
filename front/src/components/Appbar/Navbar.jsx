import {useEffect} from 'react'
import {AppBar,Toolbar,IconButton,Typography,Badge} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconMenuContainer} from './style'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {  setContactOpen } from '../../store/redux'

const Navbar = () => {

	const dispactch = useDispatch();
	const navigate = useNavigate();
	const {modalOpen} = useSelector((state) => state.users);

	useEffect(() => {
		console.log(modalOpen)

	},[modalOpen])

	const showContact = () => {
		dispactch(setContactOpen(false))
		console.log('click')
	}

	const showMessage = () => {
		dispactch(setContactOpen(true))
	}

	const logoutUser = () => {
		localStorage.removeItem('chat-key');
		navigate('/auth/login');

	}

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
		          onClick={showContact}
		        >
		          <Badge badgeContent={17} color="error">
		            <PersonIcon />
		          </Badge>
	        </IconButton>
	        <IconButton
		          size="large"
		          aria-label="show 17 new notifications"
		          color="inherit"
		          sx={{display : { xs : 'flex',sm: 'flex',md: 'none'}}}
		          onClick={showMessage}
		        >
		          <Badge badgeContent={17} color="error">
		            <MessageIcon />
		          </Badge>
	        </IconButton>

	        <IconButton
		          size="large"
		          aria-label="show 17 new notifications"
		          color="inherit"
		          sx={{marginLeft: 'auto'}}
		          onClick={logoutUser}
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