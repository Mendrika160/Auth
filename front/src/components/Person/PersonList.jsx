import {Grid,Divider,Box} from '@mui/material'
import axios from 'axios'
import Person from './Person'
import {useEffect,useState} from 'react'
import SearchField from './SearchField'
import jwtDecode from 'jwt-decode'
import {getUserInfo,getAllUserRoute} from '../../utils/ApiRoutes'
import { useDispatch } from 'react-redux'
import {  getSelectedPerson } from '../../store/redux'
import { useSelector } from "react-redux/es/exports";
import {toast} from 'react-toastify'

function PersonList() {
    
    const dispatch = useDispatch();

    
    const [currentUser,setCurrentUser] = useState(null);
    const [users,setUsers] = useState(null);
    const [bgColor,setBgColor] = useState({});
    let userInfoStorage = localStorage.getItem('chat-key');

    useEffect(() => {
        if(userInfoStorage){
            const {id} = jwtDecode(userInfoStorage);
            axios.get(`${getUserInfo}/${id}`)
                .then(({data}) => {
                    console.log(data.user);
                    setCurrentUser(data.user);
                    axios.get(`${getAllUserRoute}/${id}`)
                        .then(({data}) => {
                            console.log("uuuu",data)
                            setUsers(data.users);
                        })
                        .catch(error => {
                            toast.error(` ${error.message}`,{
                                position: toast.POSITION.TOP_CENTER,
                              })
                        })             

                })
                .catch(error => {
                     toast.error(` ${error.message}`,{
                                position: toast.POSITION.TOP_CENTER,
                              })
                })

        
        }

    },[userInfoStorage])


    const handleClick = (personId,username) => {
        setBgColor(prevState => ({...prevState, [personId]: '#e0e0e0'}));
        dispatch(getSelectedPerson(personId));
        //setSelectedPerson(username)
        
    }
    return (
        <>
            <Grid container sx={{overflow: 'auto'}}>
                <Grid item md={12} xs={12} sm={12}>
                    {currentUser && 
                            <Person  
                                name={currentUser.name} 
                                style={{position : 'fixed'}} 
                                avatar={currentUser.picture}
                            />
                                    }
                    <Divider />
                    <SearchField />

                </Grid>
                <Grid item md={12} xs={12} sm={12} sx={{overflow: 'auto'}}>
                    <Box sx={{height: '60vh'}}>

                        {users && users.map(user =>(
                            <Person 
                                key={user._id} 
                                name={user.name} 
                                avatar={user.picture} 
                                onClick={() => {handleClick(user._id,user.name)}}

                                />
                                

                            ))
                            
                        }
                </Box>
            
                </Grid>


            </Grid>

        </>
    );
}

export default PersonList;