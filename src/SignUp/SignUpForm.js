import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import RegisterButton from "./RegisterButton";
import {useAuth} from "../Hooks/useAuth";
import FormHelperText from '@mui/material/FormHelperText';


const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')

    const auth = useAuth()
    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function ValidateEmail(mail)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        let errorMessage = "Invalid email"
        document.getElementById("emailError").innerHTML = '<p>' + errorMessage + '</p>'
        return (false)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        //have this function handle all validation?
    }
    const handleEmailChange = (e) => {
        //any validation checks here
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        //have this function handle all validation?
    }

    const handleBioChange = (e) => {
        setBio(e.target.value)
        //have this function handle all validation?
    }


    const handleSubmit = (e) => {
        console.log('A email was submitted: ' + username + password + bio + email);
        e.preventDefault();
        if (!ValidateEmail(email) || email.length === 0) {
            document.getElementById("emailError").textContent = 'Invalid email address'
        } else {
            document.getElementById("emailError").textContent = ''
            setEmail(email)
        }
        if (username.length > 20 || username.length === 0){
            document.getElementById("usernameError").textContent = 'Input a username less than 21 characters'
        } else {
            document.getElementById("usernameError").textContent = ''
            setUsername(htmlEntities(username))
        }
        if (password.length < 8 || password.length === 0 ){
            document.getElementById("passwordError").textContent = 'Input a password that is at least 8 characters'
        } else {
            document.getElementById("passwordError").textContent = ''
            setPassword(htmlEntities(password))
        }
        if (bio.length > 500){
            document.getElementById("bioError").textContent = 'Bio can not be more than 500 characters'
        } else {
            document.getElementById("bioError").textContent = ''
            setBio(htmlEntities(bio))
        }

        if (password !== ""
            && username !== ""
            && email !== "") {
            auth.signup(username,bio,email,password)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                    <TextField type="text" value={email} onChange={handleEmailChange} id="filled-basic" label="Email"
                               variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <FormHelperText id="emailError"></FormHelperText>
                    <TextField type="text" value={username} onChange={handleUsernameChange} id="filled-basic" label="Username (max 20 chars)"
                               variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <FormHelperText id="usernameError"></FormHelperText>
                    <TextField type="text" value={password} onChange={handlePasswordChange} id="filled-basic" label="Password (min 8 chars)"
                               variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <FormHelperText id="passwordError"></FormHelperText>
                    <TextField type="text" value={bio} onChange={handleBioChange} id="filled-textarea"
                               label="Tell us about yourself (max 500 chars) - optional" placeholder="Bio" multiline rows={4} variant="filled"
                               sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <FormHelperText id="bioError"></FormHelperText>
                </Stack>
                <Stack direction="row" spacing={4} justifyContent='center' sx={{mb: 10}}>
                    <RegisterButton/>
                </Stack>
            </form>
        </>
    );
}

export default SignUpForm;