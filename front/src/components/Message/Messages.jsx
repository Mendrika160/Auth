import {Typography,Grid,Container} from '@mui/material'
import Message from './Message'
import Person from '../Person/Person'
import Welcome from './Welcome'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Conversation from './Conversation'
import {getUserInfo,getAllUserRoute} from '../../utils/ApiRoutes'
import { useSelector } from "react-redux/es/exports";
import {toast} from 'react-toastify'

function Messages() {
    
    const {selectedPerson} = useSelector((state) => state.users);
    const [userSelected,setUserSelected] = useState(null);
   useEffect(() => {
    axios.get(`${getUserInfo}/${selectedPerson}`)
                .then(({data}) => {
                    //console.log("data user in PersonList", data.user);
                      setUserSelected(data.user);          

                })
                .catch(error => {
                     toast.error(` ${error.message}`,{
                                position: toast.POSITION.TOP_CENTER,
                              })
                })

   },[selectedPerson])


   

    return (
        <>  
            {userSelected && <Person name={userSelected.name} avatar={userSelected.picture}/>}

            <Container sx={{
                height : '60vh',
                overflow: 'auto' ,
                borderTop: '1px solid #e0e0e0',
                borderBottom: '1px solid #e0e0e0',

            }}>
             <Conversation /> 
            
            </Container>
        </>
    );
}

export default Messages;