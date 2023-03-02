import { createTheme } from "@mui/material/styles";

export const colors = {
    primary:'#113f67',
    secondary : '#38598b',
    white: '#fff',
    gradientBlue: 'linear-gradient(to bottom right, #113f67, #1e6aac, #a8d0e6)'
}



const theme  = createTheme({
    palette:{
        primary:{
            main: colors.primary
        },
        secondary:{
            main : colors.secondary
        },
        gradientBlue: {
            main: colors.gradientBlue
        }
    }
});

export default theme