
import {styled} from '@mui/material/styles'


export const PromptContainer = styled('div')(({theme}) => ({
    display : 'flex',
    alignItems: 'center',
    justifyContent : 'sapce-between',
    width:'100%',
    padding: theme.spacing(3,0),
    gap: '20px'

    }))