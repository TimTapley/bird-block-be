import Button from "@mui/material/Button";
import {useAuth} from "../Hooks/useAuth";

function UserProfileLogoutButton() {
    const auth = useAuth()

    const handleClick = () => {
        auth.signout()
    }

    return (
        <Button onClick={handleClick} variant="text" color="blacky">Logout</Button>
    )
}

export default UserProfileLogoutButton