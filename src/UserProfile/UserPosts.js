import UserPostConstruction from "./UserPostConstruction";
import axios from "axios";
import {useState} from "react";


function UserPosts(props) {
    console.log(props.posts.posts)
    const [postsFromDB, setPostsFromDB] = useState(props.posts.posts)
    const [shouldUpdatePosts, setShouldUpdatePosts] = useState(props.shouldUpdatePosts)
    console.log(postsFromDB)
    const updatePosts = () => {

        axios.get(`http://localhost:8000/myProfile`, {
            headers: {Authorization: `Bearer ${props.posts.access_token}`}
        }).then(response => {
            let posts = {
                posts: response.data.posts,
            }
            setPostsFromDB(posts)
            setShouldUpdatePosts(false)

        })

    }

        shouldUpdatePosts && updatePosts()
        console.log(postsFromDB)
        console.log(shouldUpdatePosts)

        return (
            <>
                {postsFromDB && postsFromDB.posts != null &&
                    postsFromDB.posts.map(post => <UserPostConstruction content={post}/>)
                }
            </>
        )

}

export default UserPosts