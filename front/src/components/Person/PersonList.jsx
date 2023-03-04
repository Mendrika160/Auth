import {Typography,Grid,Divider,Box} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import Person from './Person'
import {FixedPosition} from './style'
import SearchField from './SearchField'



function PersonList() {
    const persons = [1,2,3,4,5,6,7,8,9,10,11];
    return (
        <>
            <Grid container sx={{overflow: 'auto'}}>
                <Grid item md={12}>
                    <Person avatar="example" name="User name" style={{position : 'fixed'}}/>
                    <Divider />
                    <SearchField />

                </Grid>
                <Grid item md={12} sx={{overflow: 'auto'}}>
                    <Box sx={{height: '60vh'}}>

                        {persons.map(person =>(
                            <Person key={person} name="username 123" />

                            ))
                            
                        }
                </Box>
            
                </Grid>


            </Grid>

        </>
    );
}

export default PersonList;