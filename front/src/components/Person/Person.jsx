import {MenuItem ,MenuList,IconButton,Avatar,ListItemIcon,ListItemText,Typography}from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
const Person = ({avatar, name,onClick}) => {

	return(
		<>
		<MenuList  >
			<MenuItem sx={{ width : '100%'}} onClick={onClick}>
				<ListItemIcon>
					<IconButton >
		                <Avatar alt="Remy Sharp" srcSet={avatar} />
		             </IconButton>
		        </ListItemIcon>
		        <ListItemText sx={{ maxWidth : '200px' }}>{name}</ListItemText>
		        <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 'auto' }}>
            		<CircleIcon sx={{color : 'green',width: '10px',height : '10px'}} />
          		</Typography>
	        </MenuItem>
        </MenuList>


		</>
		)

	

}

export default Person