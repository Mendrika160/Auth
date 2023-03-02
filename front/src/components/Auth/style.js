import {styled} from '@mui/material/styles'


export const ButtonContainer = styled('div')(({theme}) => ({
    display : 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    padding: theme.spacing(0,0),
}))

export const AuthContainer = styled('div')(({theme}) => ({
    display : 'flex',
    alignItems: 'center',
    justifyContent : 'center',

    padding: theme.spacing(10,0),
    
    
}))

export const MainContainer = styled('div')(({theme}) => ({

    backgroundImage: 'linear-gradient(to bottom right, #113f67, #1e6aac, #a8d0e6)',
}))
