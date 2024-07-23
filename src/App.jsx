import React, { useEffect } from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Inputer from "./components/Inputer";
import {v4} from 'uuid';
import NewPost from "./components/NewPost";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: " Мишок хацкер",body: "и поэтому мега хорош", checked: false },
    {id: 2, title: " Мишок плэйбой",body: "и поэтому мега хорош", checked: false },
    {id: 3, title: " Мишок филантроп",body: "и поэтому мега хорош", checked: false },
  ])
  const[allPosts, setAllPosts] = useState(3)
  const[checkedCount, setCheckedCount] = useState(0)
  const [searchTask, setSearchTask] = useState("")
  const clearAll = () => {
    setPosts ([]);
    setAllPosts (0)
    setCheckedCount(0)
  }

  const filtPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTask.toLowerCase())
);

return  (
  <div className="App"> 
    {/* <Counter/>  */}
    {/* <Inputer/>  */}
    <input className="search" type="text" placeholder="Поиск по названию..." value={searchTask} onChange={(e) => setSearchTask(e.target.value)}/>
    <NewPost setPosts={setPosts} setAllPosts={setAllPosts} allPosts={allPosts}/>
    <PostList posts={filtPosts} setPosts={setPosts} allPosts={allPosts} setAllPosts={setAllPosts} checkedCount={checkedCount} setCheckedCount={setCheckedCount}/>
    <div className="info">
      <span>ВСЕГО ПОСТОВ: {allPosts}</span>
      <span>ВЫПОЛНЕНО: {checkedCount}</span>
    </div>
    <button className="clearAll" onClick={clearAll}>УДАЛИТЬ ВСЕ ПОСТЫ</button>
  </div>
)
}

export default App;