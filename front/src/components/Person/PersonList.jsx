import {Grid,Divider,Box} from '@mui/material'
import axios from 'axios'
import Person from './Person'
import {useEffect,useState} from 'react'
import SearchField from './SearchField'
import { useSelector } from "react-redux/es/exports";
import jwtDecode from 'jwt-decode'
import {getUserInfo,getAllUserRoute} from '../../utils/ApiRoutes'

function PersonList() {
    const persons = [1,2,3,4,5,6,7,8,9,10,11];
    const {userInfo} = useSelector((state) => state.users);
    const [user,setUser] = useState(null);
    const [users,setUsers] = useState(null);
    let userInfoStorage = localStorage.getItem('chat-key');

    useEffect(() => {

        const {id} = jwtDecode(userInfoStorage);
            axios.get(`${getUserInfo}/${id}`)
                .then(({data}) => {
                    console.log(data.user);
                    setUser(data.user);             

                })
                .catch(error => console.log(error.message))

        setUser(userInfo);


    },[userInfo])

    useEffect(() => {
        if(user){
            axios.get(`${getAllUserRoute}/${user._id}`)
                .then(({data}) => {
                    console.log("uuuu",data)
                    setUsers(data.users);
                })
                .catch(error => console.log(error.message))

        }
        console.log('users',users);
    },[user])

    const handleClick = (personId) => {
        console.log('person clicck',personId);
    }
    return (
        <>
            <Grid container sx={{overflow: 'auto'}}>
                <Grid item md={12} xs={12} sm={12}>
                    {user && <Person  name={user.name} style={{position : 'fixed'}} avatar={user.picture}/>}
                    <Divider />
                    <SearchField />

                </Grid>
                <Grid item md={12} xs={12} sm={12} sx={{overflow: 'auto'}}>
                    <Box sx={{height: '60vh'}}>

                        {users && users.map(user =>(
                            <Person key={user._id} name={user.name} avatar={user.picture}  onClick={() => {handleClick(user._id)}}/>

                            ))
                            
                        }
                </Box>
            
                </Grid>


            </Grid>

        </>
    );
}

export default PersonList;