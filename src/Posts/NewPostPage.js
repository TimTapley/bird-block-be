import {useAuth} from "../Hooks/useAuth";
import {useEffect} from "react";
import {ThemeProvider} from "@mui/material";
import theme from "../Themes";
import Container from "@mui/material/Container";
import UserProfileUsername from "../UserProfile/UserProfileUserName";
import UserProfileWritePost from "./UserProfileWritePost";
import NewPostHeader from "./NewPostHeader";


function NewPostPage() {
    const auth = useAuth()

    useEffect(()=>{
        console.log(auth.user)
    })
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                mx: 'auto',
                bgcolor: 'greeny.main',
                color: 'blacky.main',
                width: '1',
                fontSize:' 2rem',
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <NewPostHeader bio={auth.user} />
            </Container>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 2,
                mx: 'auto',
                bgcolor: 'lilacy.main',
                color: 'whitey.main',
                // height: '20vh',
                width: '30vw',
                fontSize:' 1rem',
                m: 4,
                borderRadius: 5,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <UserProfileUsername username={auth.user}/>
            </Container>
            <UserProfileWritePost />
        </ThemeProvider>
    )
}

export default NewPostPage;