import React from "react";
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
    {id: 1, title: " Мишок хацкер",body: "и поэтому мега хорош" },
    {id: 2, title: " Мишок плэйбой",body: "и поэтому мега хорош" },
    {id: 3, title: " Мишок филантроп",body: "и поэтому мега хорош" },
  ])

return  (
  <div className="App"> 
    {/* <Counter/> */}
    {/* <Inputer/> */}
    <NewPost setPosts={setPosts}/>
    <PostList posts={posts} setPosts={setPosts} title="Список "/>
  </div>
)
}

export default App;