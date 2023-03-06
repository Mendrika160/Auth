import {MenuItem ,MenuList,IconButton,Avatar,ListItemIcon,ListItemText,Typography}from '@mui/material';
import {useEffect,useState} from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { useSelector } from "react-redux/es/exports";

const Person = ({avatar, name,onClick,}) => {

	//const [bgColorState, setBgColorState] = useState(bgColor);	
	  
	
	 const handlePersonClick = () => {
	    onClick();
	    
	 };
	return(
		<>
		<MenuList disablePadding sx={{ padding: '1px 0px'}} >
			<MenuItem 
				sx={{ 
					width : '100%',
					
				}} 
				onClick={handlePersonClick}
			>
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