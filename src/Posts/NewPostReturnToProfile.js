import Button from "@mui/material/Button";
import {useAuth} from "../Hooks/useAuth";
import {useNavigate} from "react-router-dom";

function BackToProfileButton() {
    let navigate = useNavigate();

    const redirect = () => {
        navigate('/myProfile') }

    return (
        <Button onClick={redirect} variant="text" color="blacky">Back to Profile</Button>
    )
}

export default BackToProfileButton;