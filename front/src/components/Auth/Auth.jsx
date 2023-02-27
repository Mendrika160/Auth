import React,{useState,useRef} from 'react'
import {Button,Grid,Container,Slide} from '@mui/material'
import Login from './Login'
import Register from './Register'
import {ButtonContainer} from './style'
const Auth = () => {

    const [showRegister,setShowRegister] = useState(false)
    const containerRef = useRef(null);

    const [checked, setChecked] = React.useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

    
    return (
        <>
        <Container>
             <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
              <Button onClick={handleClick} variant="contained">
                Slider
              </Button>
            </Slide>
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
                        
                          {showRegister === false ?  <Login /> : <Register />}
                        
                        
                    </Grid>
                </Grid>
            
            </Container>
        </>
    )

}

export default Auth