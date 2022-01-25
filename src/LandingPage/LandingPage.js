import AppTitle from "../AppTitle/AppTitle";
import SignUpButton from "./SignUpButton"
import LoginButton from "./LoginButton"
import Container from '@mui/material/Container';
import {Stack, ThemeProvider} from "@mui/material";
import theme from "../Themes";

import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 2,
                mx: 'auto',
                bgcolor: 'greeny.main',
                color: 'lilacy.main',
                height: '100vh',
                width: '100vw',
                fontSize:' 3rem',
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <AppTitle />
                <Stack direction="row" spacing={4}  justifyContent='center'>
                    <Link to='/signUp'>
                        <SignUpButton  />
                    </Link>
                    <Link to='/login'>
                        <LoginButton />
                    </Link>
                </Stack>

            </Container>
        </ThemeProvider>
    )
}

export default LandingPage;