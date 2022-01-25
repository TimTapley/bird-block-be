import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import NewPostButton from "./NewPostButton";
import {useAuth} from "../Hooks/useAuth";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const UserProfileWritePost = (props) => {

    const [common, setCommon] = useState(null)
    const [binomial, setBinomial] = useState(null)
    const [date, setDate] = useState(null)
    const [where, setWhere] = useState(null)
    const [user, setUser] = useState(null);
    const [shouldUpdatePosts, setShouldUpdatePosts] = useState(props.shouldUpdatePosts)

    const auth = useAuth()

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    const navigate = useNavigate();

    const handleCommonChange = (e) => {
        //any validation checks here
        setCommon(e.target.value)
    }

    const handleBinomialChange = (e) => {
        //any validation checks here
        setBinomial(e.target.value)
    }

    const handleDateChange = (e) => {
        //any validation checks here
        setDate(e.target.value)
    }

    const handleWhereChange = (e) => {
        //any validation checks here
        setWhere(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('A new post was created: ' + common + binomial + date + where);
        e.preventDefault();

        if (common.length !== 0 || binomial.length !== 0 || date.length !== 0 || where.length !== 0) {
            setCommon(htmlEntities(common))
            setBinomial(binomial)
            setDate(date)
            setWhere(where)
        }

        const userProfileNewPost = (userId, common, binomial, date, where) => {
            console.log(userId, common, binomial, date, where)
            if (common === '' || binomial === ''  || date === '' || where === '') return;
            axios.post(`http://localhost:8000/userProfileWritePost`, {
                userId: userId,
                common: common,
                binomial: binomial,
                date: date,
                where: where
            }).then(response => {
                if (response.data.success) {
                    return response.data.data
                    setShouldUpdatePosts(true)
                }
            }).then( async (user) => {
                console.log(user.access_token);
                let profileResponse = await axios.get(`http://localhost:8000/myProfile`, {
                    headers: { Authorization: `Bearer ${user.access_token}` }

                }).then(response => {
                    let userData = {
                        posts: response.data.posts,
                        ...user
                    }
                    setUser(userData)
                }).then(()=>{
                    navigate('/myProfile')
                })
            })
        };

        userProfileNewPost(props.userId, common, binomial, date, where)


    }

return (
    <>
        <form onSubmit={handleSubmit}>
            <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}}>
                <TextField type="text" value={common} onChange={handleCommonChange} id="filled-basic"
                           label="Common Name"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}}/>
                <TextField type="text" value={binomial} onChange={handleBinomialChange} id="filled-basic"
                           label="Scientific Name"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}}/>
                <TextField type="text" value={date} onChange={handleDateChange} id="filled-basic" label="Date Seen"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}}/>
                <TextField type="text" value={where} onChange={handleWhereChange} id="filled-basic" label="Location"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}}/>
                <FormHelperText id="error"></FormHelperText>
            </Stack>
            <Stack direction="row" spacing={4} justifyContent='center' sx={{m: 10}}>
                <NewPostButton/>
            </Stack>
        </form>
    </>
);
}

export default UserProfileWritePost;