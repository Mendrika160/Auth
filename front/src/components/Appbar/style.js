import {styled} from '@mui/material/styles'

export const IconMenuContainer = styled('div')(({theme}) => ({
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
        display : 'flex',
        alignItems: 'center',
        marginLeft: 'auto',

        padding: theme.spacing(2,0),

    }    
    
}))