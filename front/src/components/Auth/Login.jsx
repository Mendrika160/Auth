import {Typography,Box,TextField,Button,Container,Divider,Card,CardContent} from '@mui/material'
import googleImg from '../../assets/img/google-logo.png'
import GoogleIcon from '@mui/icons-material/Google';
import {googleCallbackUrl} from '../../utils/ApiRoutes';
import axios from 'axios'
import {useState,useEffect,useMemo} from 'react'
import GoogleBtn from './GoogleBtn'
import jwt_decode from "jwt-decode";
import {Link} from 'react-router-dom'
import {ButtonContainer,AuthContainer,MainContainer} from './style'

function Login() {

 


  const handleSubmit = () => {
        console.log("alert");
      
    }

  return (
      <>

      <MainContainer>

      <AuthContainer>

        <Card  sx={{ 
            pb: 3,
            maxWidth: '450px',
             }}>
        <CardContent>
          <Container component="main">
           <Typography variant="h3" sx={{ mt: 2}}>Sign In </Typography>
                  <Box
                    sx={{
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                      <Box
                        component="form"
                        
                        onSubmit={handleSubmit}  
                        sx={{ my: 1 }}
                        noValidate
                        autoComplete="off"
                      >
                          

                            <TextField
                              required
                              fullWidth
                              id="email"
                              label="email"
                              variant="outlined" 
                              type="email"
                              name="email"
                              sx={{ mt: 3, mb: 2 }}
                          />

                          <TextField
                              required
                              fullWidth
                              id="password"
                              label="password"
                              type="password"
                              name="password"
                              variant="outlined"
                              autoComplete="current-password" 
                              sx={{ mt: 3, mb: 2 }}
                          />
                          <Button 
                              variant="contained"
                              fullWidth
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleSubmit}

                              >Sign in
                          </Button>
                          <ButtonContainer>
                            <Typography variant="body-2" component="p" sx={{pr: 1}}>Don't have an account ? go </Typography>
                            <Link to="/auth/register">sign up</Link>
                          </ButtonContainer>
                      </Box>
                      <Divider>OR</Divider>
                        
                        <GoogleBtn 
                          text="Sign In with Google"
                          urlCall={`${googleCallbackUrl}/signin`}
                        />

                        
                        
                  </Box>
              </Container>
              </CardContent>
         </Card>
       </AuthContainer>
       </MainContainer>
      </>
  );
}

export default Login;