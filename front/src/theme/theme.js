import { createTheme } from "@mui/material/styles";

export const colors = {
    primary:'#113f67',
    secondary : '#38598b',
    white: '#fff'
}



const theme  = createTheme({
    palette:{
        primary:{
            main: colors.primary
        },
        secondary:{
            main : colors.secondary
        }
    }
});

export default theme