import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import SignInPage from "./SignUp/SignUpPage";
import LoginPage from "./Login/LoginPage";
import LoggedIn from "./Utilities/LoggedIn";
import UserProfilePage from "./UserProfile/UserProfilePage";
import NewPostPage from "./Posts/NewPostPage";
import {useState} from "react";

function Routing() {
    const [shouldUpdatePosts, setShouldUpdatePosts] = useState(false)
    return (
        <>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/signUp" element={<SignInPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/newUserPost" element={<NewPostPage shouldUpdatePosts={shouldUpdatePosts} setShouldUpdatePosts={setShouldUpdatePosts}/>} />
                <Route path="/myProfile" element={
                    <LoggedIn>
                        <UserProfilePage shouldUpdatePosts={shouldUpdatePosts} setShouldUpdatePosts={setShouldUpdatePosts}/>
                    </LoggedIn>
                } />
            </Routes>
        </>
    )
}

export default Routing;