import {useState,useEffect,useMemo} from 'react'
import googleImg from '../../assets/img/google-logo.png'
import {googleCallbackUrl} from '../../utils/ApiRoutes';
import axios from 'axios'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import {Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const GoogleBtn = ({text,urlCall}) => {

	const navigate = useNavigate();

	 const [userInfo,setUserInfo] = useState({name: '',email: '',picture: '',googleId: ''})

	 useEffect(() => { 
	    
	    if(userInfo.name === '' || userInfo.email === '' || userInfo.picture === '' || userInfo.googleId === ''){
	      console.log('vide :', userInfo)
	    }else{
	    	console.log('vide :', userInfo)
	      	axios.post(urlCall,userInfo)
		      	.then(({data}) => { 
		      		if(!data.token){

		      			navigate('/auth/login')
		      		}else{
		      			navigate('/')
		      		}



		      		console.log("resultat : ",data)
		      	})
		      	.catch(error => {
		      		console.log("error ee",error)
		      		if(error){

		      			if(error.response.status === 409){
			      			console.log("error : ", error.response.data.message);
			      		}
			      		if(error.response.status === 403){
			      			console.log("error : ", error.response.data.message);
			      		}
			      		console.log("error ee",error)
		      		}
		      		
		      		
		      	}
		      	)
	    }
	  },[userInfo])

	     const googleAuth =  useGoogleLogin({
            onSuccess: codeResponse => {
              axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
                headers: {
                  Authorization: `Bearer ${codeResponse.access_token}`,
                },
              })
                .then((response) => {
                   console.log(response.data)
                  setUserInfo(prevState => ({ 
                    ...prevState,
                    name: response.data.name,
                    email: response.data.email,
                    picture : response.data.picture,
                    googleId : response.data.id
                  }));
         
                })
                
                .catch(err => {
                  console.log("error : ",err)
                })
           
            
            },
            onError : error => {
              console.log('error',error)
            }
              

           
          })
            

	return(
		<>
			<Button 
                variant="outlined"
                sx={{mt : 3}}
                onClick={() => googleAuth()}
             > 
                      
                <img
                    style={{ width: '25px' , height : '20px' ,paddingRight: '5px'}}  
                    src={googleImg} 
                    alt="google-logo"
                        
                  /> 
                       
                    {text}
            </Button>

		</>
	)
}

export default GoogleBtn