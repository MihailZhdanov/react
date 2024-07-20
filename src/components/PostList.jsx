import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, setPosts, title}) =>{
    return(
        <div>
            <h1 style={{textAlign: "center"}}>
            {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem post={post} setPosts={setPosts} key={post.id} index={index}/>
            )}
        </div>
    )
}

export default PostList;
