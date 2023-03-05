import {Typography,TextField,Box,Button,Container,Divider,Card} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup"
import axios from 'axios' 
import {googleCallbackUrl} from '../../utils/ApiRoutes';
import {Link} from 'react-router-dom'
import GoogleBtn from './GoogleBtn'
import {useState} from 'react'
import {ButtonContainer,AuthContainer,MainContainer} from './style'
import {signUpUserRoute} from '../../utils/ApiRoutes'
import {toast} from 'react-toastify'

function Register() {

    const navigate = useNavigate();

    //schema validation using yup 

    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Email is a required field")
            .min(4, "Username must be at least 4 characters"),
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string()
            .required("Password is a required field")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
       

    });

    const handleSubmit = (values,{setErrors}) => {

        console.log('val',values)
        axios.post(signUpUserRoute,values)
            .then(res => {
                navigate('/auth/login');
                toast.success('successfully register,log now',{
                            position: toast.POSITION.TOP_CENTER,
                          })
            })
            .catch(error => {
                console.log("error", error)
                if(error){
                    
                    if(error.response.data.body === 'email'){
                        setErrors({ email: error.response.data.message})
                    }
                }
            })
        
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
                                <Formik
                                    validationSchema={schema}
                                    initialValues={{  name: "",email: "",password: "",confirmPassword: ""  }}
                                    onSubmit={(values,{setErrors}) => handleSubmit(values,{setErrors})}
                                >{(
                                    {
                                         values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,

                                    }
                                  ) => (


                                

                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            required
                                            fullWidth 
                                            id="username"
                                            label="username"
                                            name="name"
                                            variant="outlined"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            sx={{ mt: 3, mb: 1 }}
                                        />
                                        <Typography variant="body2" component="span" sx={{ fontSize : '11px',color : 'red' }}>
                                            {errors.name && touched.name && errors.name}
                                        </Typography>
                                          <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="email"
                                            variant="outlined" 
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            sx={{ mt: 3, mb: 1 }}
                                        />
                                        <Typography variant="body2" component="span" sx={{ fontSize : '11px',color : 'red' }}>
                                            {errors.email && touched.email && errors.email}
                                        </Typography>
                                        <TextField
                                            required
                                            fullWidth
                                            id="password"
                                            label="password"
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            autoComplete="current-password" 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            sx={{ mt: 3, mb: 1 }}
                                        />
                                        <Typography variant="body2" component="span" sx={{ fontSize : '11px',color : 'red' }}>
                                            {errors.password && touched.password && errors.password}
                                        </Typography>

                                        <TextField
                                            required
                                            fullWidth
                                            id="confirm-password"
                                            label="confirm password"
                                            type="password"
                                            name="confirmPassword"
                                            variant="outlined"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                             value={values.confirmPassword}
                                            sx={{ mt: 3, mb: 1 }}
                                        />
                                        <Typography variant="body2" component="span" sx={{ fontSize : '11px',color : 'red' }}>
                                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                                        </Typography>
                                        <Button 
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                            sx={{ mt: 3, mb: 2 }}
                                             

                                            >Sign up
                                        </Button>
                                    </form>
                                 )}
                                </Formik>
                                <ButtonContainer>
                                <Typography variant="body-2" component="p">Already have an account ? </Typography>
                                <Link
                                  to="/auth/login"
                                >
                                  Login
                                </Link>
                                </ButtonContainer>
                            
                            

                            
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