
// imports 

//libaries
import React from "react";
import "./index.css";
// functional components
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts"
import Contacts from "./Components/Contacts"
// data
import posts from "./Data/posts";


// ^^

function App() {
// 
  // functionality
// 


// JSX
  return (
    <div className="Home">
      <NavBar/>
      <UserProfile/>
      <Posts posts={posts}/>
      <Contacts/>
    </div>
  )
}

export default App;
