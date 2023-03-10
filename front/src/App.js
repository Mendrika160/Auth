import {CssBaseline, Typography} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
      <>
      <GoogleOAuthProvider clientId="617156272778-je10sbh9jg8tf8ftpkj6rg4r59kh4en1.apps.googleusercontent.com">
        <ThemeProvider theme={theme}>
          <CssBaseline/>

          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/auth/login" element={<Login/>} />
            <Route path="/auth/register" element={<Register/>} />
          </Routes>
        </ThemeProvider>
        </GoogleOAuthProvider>
      </>
  );
}

export default App;
