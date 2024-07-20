import React from 'react'
import NewPost from './NewPost'

const PostItem = ({post, setPosts, key, index}) => {
 
 function delPost() {
    setPosts((prev) =>prev.filter((el) =>el.id !== post.id))
 }
 function changePost(prev) => {
    let findingEl = prev.find((el) => el.id === post.id)
    findingEl.title = NewPost(addTitle)
    findingEl.body = NewPost(addBody)
    const filteredArr = prev.filter((prev) => prev.id !==post.id)
    return[...prev, findingEl]
 }
    return (
    <div className="post">
            <div className="post_cont">
                <strong>{index+1}{post.title}</strong>
                <div>
                {post.body}
                </div>
            </div>
            <div className="post_btns">
                <button onClick={changePost}>Изменить</button>
                <button onClick={delPost}>Удалить</button>
            </div>
    </div> 
    )
}

export default PostItem;