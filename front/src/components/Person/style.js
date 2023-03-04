import {styled} from '@mui/material/styles'
import {Box} from '@mui/material'

export const FixedPosition = styled('div')(({theme}) => ({
   position : 'fixed'
    }))


export const Dot = styled('span')(({theme}) => ({
    width: '20px',
    height: '10px',
    backgroundColor: 'green',
    borderRadius: '50%',
    }))

export const ModalContainer = styled(Box)(({theme}) => ({
       position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }))

