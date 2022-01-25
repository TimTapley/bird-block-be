import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function CreateNewPostButton() {

    let navigate = useNavigate();

    const redirect = () => {
        navigate('/newUserPost')
    }
    return (
        <Button  variant="contained" color="greeny" size="medium" onClick={redirect}>Create New Post</Button>
    )
}

export default CreateNewPostButton;