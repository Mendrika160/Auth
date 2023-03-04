import {styled} from '@mui/material/styles'


export const FixedPosition = styled('div')(({theme}) => ({
   position : 'fixed'
    }))


export const Dot = styled('span')(({theme}) => ({
    width: '20px',
    height: '10px',
    backgroundColor: 'green',
    borderRadius: '50%',
    }))