import {Typography,Box,TextField,Button,Container,Divider} from '@mui/material'
import googleImg from '../../assets/img/google-logo.png'
import GoogleIcon from '@mui/icons-material/Google';

function Login() {

  const handleSubmit = () => {
        console.log("alert");
    }
  return (
      <>
        <Container component="main" maxWidth="xs">
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
                      sx={{ mt: 1 }}
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

                            >Login
                        </Button>
                    </Box>
                    <Divider>OR</Divider>
                    <Button 
                      variant="outlined"
                      sx={{mt : 3}}
                    > 
                    
                      <img
                      style={{ width: '25px' , height : '25px' ,paddingRight: '5px'}}  
                      src={googleImg} 
                      alt="google-logo"
                      
                       /> 
                     
                      Sign In with google</Button>
                      
                </Box>
            </Container>
       
      </>
  );
}

export default Login;