import {Modal,Typography,Grid,Paper} from '@mui/material'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {  setModalClose } from '../../store/redux'
import {ModalContainer}  from './style'
import PersonList from './PersonList'

const ListPersonModal = () => {
	const {modalOpen} = useSelector((state) => state.users);
	

	return (
		<>
			<Grid container component={Paper} sx={{  height: 'auto'}}>
                <Grid item md={12} sm={12} sx={{ overflow: 'hidden' }}>
                 	<PersonList />                    
                </Grid>
            </Grid>
		</>
		)
}

export default ListPersonModal;