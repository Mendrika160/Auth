import {Grid,Paper} from '@mui/material'

import {useEffect} from 'react'
import MessageList from '../Message/MessageList'
import {useSelector} from "react-redux/es/exports";
import ListPersonModal from '../Person/ListPersonModal'
import Welcome from '../Message/Welcome'
const DesktopHome = () => {

    const {selectedPerson} = useSelector(state => state.users)


	 useEffect(() => {
        if(selectedPerson){
            console.log('Selectedperson',selectedPerson)
        }

    },[selectedPerson])

	return(
		<>
			<Grid container component={Paper} sx={{  height: 'auto'}}>
                <ListPersonModal md={3} sm={3} borderRight='1px solid #e0e0e0'/>
                {selectedPerson ? <MessageList md={9} sm={9}/> : <Welcome md={9} sm={9} xs={12} />}
                
            </Grid>
		</>
		)

}

export default DesktopHome;