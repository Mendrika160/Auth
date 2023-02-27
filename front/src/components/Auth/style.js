import {styled} from '@mui/material/styles'


export const ButtonContainer = styled('div')(({theme}) => ({
    display : 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    padding: theme.spacing(3,0),
    }))