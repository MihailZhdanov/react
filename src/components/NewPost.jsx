import React, {useState} from 'react'
import {v4} from 'uuid'

const NewPost = function({setPosts, setAllPosts, allPosts}){
    const [newTitle, setNewTitle] = useState("")
    const [newBody, setNewBody] = useState("")

    function addTitle(e){ 
        setNewTitle(e.target.value)
        console.log(e)
      }
      function addBody(e){
        setNewBody(e.target.value)
      }
      function addPost(){
        setPosts((prev) => [...prev, {id: v4(), title: newTitle, body: newBody, checked: false }])
        setAllPosts(allPosts + 1)
      
      }


      return  (
        <div className='newpost'>
            <div className ='input' > 
                <input className='input-text' type="text" onChange={addTitle} placeholder="Заголовок"/>
                <input className='input-text' type="text" onChange={addBody} placeholder="Тема"/>
            </div>
          <button id='addpost' onClick={addPost}>Добавить пост</button>
        </div>
      )
}


export default NewPost;
