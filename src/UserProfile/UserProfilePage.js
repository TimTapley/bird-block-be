import {Stack, ThemeProvider} from "@mui/material";
import theme from "../Themes";
import Container from "@mui/material/Container";
import UserProfileHeader from "./UserProfileHeader";
import {useAuth} from "../Hooks/useAuth";
import {useEffect} from "react";
import UserProfileUsername from "./UserProfileUserName";
import UserProfileWritePost from "../Posts/UserProfileWritePost";
import UserPosts from "./UserPosts";
import CreateNewPostButton from "./CreateNewPostButton";



function UserProfilePage(shouldUpdatePosts, setShouldUpdatePosts) {
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
                fontSize:' 3rem',
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <UserProfileHeader bio={auth.user} />
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
            <Stack direction="row" spacing={4} justifyContent='center' sx={{mb: 10}}>
              <CreateNewPostButton />
            </Stack >
            <UserPosts posts={auth.user} shouldUpdatePosts={shouldUpdatePosts} setShouldUpdatePosts={setShouldUpdatePosts}/>
        </ThemeProvider>
    )
}

export default UserProfilePage;