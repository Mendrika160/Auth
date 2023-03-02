import {Typography,TextField,Box,Button,Container,Divider,Card} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import googleImg from '../../assets/img/google-logo.png'
import axios from 'axios' 
import {googleCallbackUrl} from '../../utils/ApiRoutes';
import {Link} from 'react-router-dom'
import GoogleBtn from './GoogleBtn'
import {ButtonContainer,AuthContainer,MainContainer} from './style'
function Register() {

    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log("alert");
    }

    const btnGoogleRegister = () => {
        axios.get(googleCallbackUrl).then((res) => {
                console.log('res', res)
            }

        )
        console.log('click')
    }

    return (
        <>
            <MainContainer>
             <AuthContainer>
                <Card sx={{ pb: 3 }}>
                    <Container component="main" maxWidth="xs">
                    <Typography variant="h3" sx={{ mt: 2}}>Sign Up </Typography>
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
                                    id="username"
                                    label="username"
                                    name="username"
                                    variant="outlined" 
                                    sx={{ mt: 3, mb: 2 }}
                                />

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

                                <TextField
                                    required
                                    fullWidth
                                    id="confirm-password"
                                    label="confirm password"
                                    type="password"
                                    name="confirm-password"
                                    variant="outlined"
                                    autoComplete="current-password" 
                                    sx={{ mt: 3, mb: 2 }}
                                />
                                <Button 
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2 }}

                                    >Sign up
                                </Button>
                                <ButtonContainer>
                                <Typography variant="body-2" component="p">Already have an account ? </Typography>
                                <Link
                                  to="/auth/login"
                                >
                                  Login
                                </Link>
                                </ButtonContainer>
                            </Box>
                            <Divider>OR</Divider>

                            <GoogleBtn 
                                text="Sign Up with Google"
                                urlCall={`${googleCallbackUrl}/signup`}
                                />
                        </Box>
                    </Container>
                </Card>
                </AuthContainer>
            </MainContainer >
        </>
    );
}

export default Register;