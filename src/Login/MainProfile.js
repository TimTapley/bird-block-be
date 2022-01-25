import {useAuth} from "../Hooks/useAuth";


function mainProfile() {

    let auth =useAuth()

    return <h1>{user.data}</h1>
}

export default mainProfile;