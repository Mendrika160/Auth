import {CssBaseline, Typography} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline/>

          <Typography variant="body2">
            Hello To You
          </Typography>
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/auth" element={<Auth/>} />
          </Routes>
        </ThemeProvider>
      </>
  );
}

export default App;
