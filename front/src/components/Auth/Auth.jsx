import React,{useState,useRef} from 'react'
import {Button,Grid,Container,Slide,Card} from '@mui/material'
import Login from './Login'
import Register from './Register'
import {ButtonContainer} from './style'
const Auth = () => {

    const [showRegister,setShowRegister] = useState(false)
    const containerRef = useRef(null);

  

    
    return (
        <>
        <Container>
           
            <Container component="div" maxWidth="xs">
                
                <ButtonContainer>
                    <Button
                        fullWidth 
                        variant="contained" 
                        onClick={() => {setShowRegister(false)}}
                    >
                        Login
                    </Button>
                    <Button
                        fullWidth
                        sx={{ml : 5}}
                        variant="contained" 
                        onClick={() => {setShowRegister(true)}} 
                        >Register
                    </Button>

                </ButtonContainer>
            </Container> 
                <Grid 
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <Grid item>
                        <Card>
                        
                          {showRegister === false ?  <Login /> : <Register />}
                        </Card>
                        
                    </Grid>
                </Grid>
            
            </Container>
        </>
    )

}

export default Auth