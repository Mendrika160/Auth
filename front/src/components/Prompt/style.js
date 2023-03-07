
import {styled} from '@mui/material/styles'


export const PromptContainer = styled('div')(({theme}) => ({
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 5px',
    gap: '20px',
    width:'100%',

        form:{
            display : 'flex',
            gap: '20px',
            width:'100%'

        }
    

}))


export const Emoji = styled('div')(({theme}) => ({
    position: 'absolute'
   
}))