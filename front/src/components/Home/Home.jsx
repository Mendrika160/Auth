import {Container,useMediaQuery} from '@mui/material'
import Navbar from '../Appbar/Navbar'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useTheme} from '@mui/material/styles'
import DesktopHome from './DesktopHome'
import MobileHome from './MobileHome'
import axios from 'axios'

import { useSelector } from "react-redux/es/exports";
import { useDispatch } from 'react-redux'
import {  setMessageOpen,getUser } from '../../store/redux'


function Home() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const {selectedPerson,modalOpen} = useSelector((state) => state.users);
    
    let userInfoStorage = localStorage.getItem('chat-key');

    //detect the screen dimension
    const matches = useMediaQuery(theme.breakpoints.down('md'))


    useEffect(() => {

        
        if(!userInfoStorage){
            navigate('/auth/login');

        }
            
        

    },[userInfoStorage,navigate])

    useEffect(() => {
        if(selectedPerson !== null){
            dispatch(setMessageOpen(true))
        }

    },[theme,selectedPerson])

    useEffect(() => {
        console.log("Home",modalOpen)

    },[modalOpen])
    

    
    return (
        <>
        <Navbar />
        <Container sx={{ mt: 10}}>
        {matches ? <MobileHome/> : <DesktopHome/>}
            
        </Container>
        </>
        
    );
}

export default Home;