import React, {useState} from 'react'
import {v4} from 'uuid'

const NewPost = function({setPosts}){
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
        setPosts((prev) => [...prev, {id: v4(), title: newTitle,body: newBody }])
      }

      return  (
        <div> 
          <input type="text" onChange={addTitle} placeholder="Заголовок"/>
          <input type="text" onChange={addBody} placeholder="Тема"/>
          <button onClick={addPost}>Добавить пост</button>
        </div>
      )
}

export default NewPost;
