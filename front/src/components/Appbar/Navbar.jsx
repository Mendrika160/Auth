import {useEffect} from 'react'
import {AppBar,Toolbar,IconButton,Box,Typography,Badge} from '@mui/material'

import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconMenuContainer} from './style'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {  setModalOpen } from '../../store/redux'

const Navbar = () => {

	const dispactch = useDispatch();
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
	const {modalOpen} = useSelector((state) => state.users);

	useEffect(() => {
		console.log(modalOpen)

	},[modalOpen])
	const showContact = () => {
		dispactch(setModalOpen(true))
		console.log('click')
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
		          sx={{marginLeft: 'auto'}}
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