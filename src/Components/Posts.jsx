import React from "react";
import Post from "./Post"

function Posts({ posts }) {


    return (
        <div className="posts">
            <h2>Posts</h2>
            { // this is where we map the data
            posts.map(post => (
                <Post key={post.id} title={post.title} body={post.body}/>
            ))
            }
            
        </div>
    )
}

export default Posts;