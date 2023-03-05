import {Typography,Box,TextField,Button,Container,Divider,Card,CardContent} from '@mui/material'


import {googleCallbackUrl} from '../../utils/ApiRoutes';
import axios from 'axios'
//import {useState,useEffect} from 'react'
import GoogleBtn from './GoogleBtn'
import {useNavigate} from 'react-router-dom'
import { Formik } from "formik";
import * as Yup from "yup"
import {Link} from 'react-router-dom'
import {ButtonContainer,AuthContainer,MainContainer} from './style'
import { toast } from 'react-toastify';
import {signInUserRoute} from '../../utils/ApiRoutes'



function Login() {

  const navigate = useNavigate()
  const schema = Yup.object().shape({
       
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
        

    });


 


  const handleSubmit = (values,{setErrors}) => {
    console.log('val log',values)
    axios.post(signInUserRoute,values)
            .then(({data}) => {
              localStorage.setItem('chat-key',JSON.stringify(data.token))
              console.log("res",data);
                navigate('/');
              })
            .catch(error => {
                console.log("error", error)
                if(error){
                    
                    if(error.response.data.body === 'email'){
                        setErrors({ email: error.response.data.message})
                    }
                    if(error.response.data.body === 'password'){
                        setErrors({ password: error.response.data.message})
                    }
                }
            })


     
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
                     <Formik
                          validationSchema={schema}
                          initialValues={{ email: "",password: ""  }}
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
                                id="email"
                                label="email"
                                variant="outlined" 
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                sx={{ mt: 3, mb: 2 }}
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
                                sx={{ mt: 3, mb: 2 }}
                            />

                            <Typography variant="body2" component="span" sx={{ fontSize : '11px',color : 'red' }}>
                                {errors.password && touched.password && errors.password}
                            </Typography>
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
                        </form>
                      )}
                      </Formik>
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