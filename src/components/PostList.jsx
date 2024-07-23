import React, { useState } from 'react'
import PostItem from './PostItem'

const PostList = ({posts, setPosts, title, allPosts, setAllPosts, checkedCount, setCheckedCount}) =>{

    const handleCheckboxChange = (isChecked) => {
        setCheckedCount((prevCount) => isChecked ? prevCount + 1 : prevCount - 1);
    };

    return(
        <div>
            <p id='p'>Список постов</p>
            {posts.map((post, index) =>
                <PostItem post={post} setPosts={setPosts} key={post.id} index={index} allPosts={allPosts} setAllPosts={setAllPosts} posts={posts} onCheckboxChange={handleCheckboxChange}/>
            )}
        </div>
    )
}

export default PostList;