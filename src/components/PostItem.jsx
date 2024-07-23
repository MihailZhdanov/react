import React, { useState } from 'react'
import NewPost from './NewPost'

const PostItem = ({post, setPosts, key, index, allPosts, setAllPosts, posts, onCheckboxChange}) => {
 const [newTitle, setNewTitle] = useState('')
 const [newBody, setNewBody] = useState('')
 const [checked, setChecked] = useState(false)


 function delPost() {
    if (checked) {
        onCheckboxChange(false);
    }
    setPosts((prev) =>prev.filter((el) =>el.id !== post.id))
    setAllPosts(allPosts - 1)
 }
 function changePost() {
    setPosts((prev) => {
        let findingIndex = prev.findIndex((el) => el.id === post.id)
        prev[findingIndex].title = newTitle
        prev[findingIndex].body = newBody 
        return [...prev]
    })
 }

 const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckboxChange(newChecked);
};

    return (
    <div className="post">
        <input className="box" type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            <div className="post_cont">
                <strong>{index+1}. {post.title}</strong>
                <div>
                {post.body}
                </div>
            </div>
            <div className='post_inp'>
                <input className='post_inp' onChange={(e) => setNewTitle(e.target.value)} placeholder='Новый заголовок' />
                <input className='post_inp' onChange={(e) => setNewBody(e.target.value)} placeholder='Новое содержание' />
            </div>
            <div>
                <button className="post_btns" onClick={changePost}>Изменить</button>
                <button className="post_btns" onClick={delPost}>Удалить</button>
            </div>
    </div> 
    )
}

export default PostItem;