import {Container,useMediaQuery} from '@mui/material'
import Navbar from '../Appbar/Navbar'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useTheme} from '@mui/material/styles'
import DesktopHome from './DesktopHome'
import MobileHome from './MobileHome'
import axios from 'axios'



function Home() {
    
    const navigate = useNavigate();
    const theme = useTheme();
    
    
    let userInfoStorage = localStorage.getItem('chat-key');

    //detect the screen dimension
    const matches = useMediaQuery(theme.breakpoints.down('md'))


    useEffect(() => {

        
        if(!userInfoStorage){
            navigate('/auth/login');

        }
            
        

    },[userInfoStorage,navigate])
    

    
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