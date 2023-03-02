import {Typography,Grid,Container} from '@mui/material'
import PersonList from './PersonList'
import Messages from './Messages'
import Prompt from './Prompt'
function Home() {

    const  example = [0,1,2,3,4,5,6,7,8,9,10,11,12] ;

    const userClick = (user) => {
        console.log("user",user)
    }
    return (
        <>
        <Container>
            <Grid container>
                <Grid item md={3} sx={{ border: '1px solid black' }}>
                    {example.map(user => (
                            <PersonList 
                                key={user}
                                onClick={(user) => userClick(user)}
                                />
                    ))}
                    
                    
                </Grid>
                <Grid 
                    item md={9} 
                    xs={12} 
                    sx={{ border: '1px solid black' }}>
                    <Messages />
                    <Prompt />
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default Home;