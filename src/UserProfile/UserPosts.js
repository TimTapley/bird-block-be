import UserPostConstruction from "./UserPostConstruction";


function UserPosts(posts) {
    console.log(posts.posts.posts)
    let postsFromDB = posts.posts.posts
    return (
        <>
            {postsFromDB != null &&
                postsFromDB.map(post => <UserPostConstruction content={post}/>)
            }
        </>
    )
}

export default UserPosts