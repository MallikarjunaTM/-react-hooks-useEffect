import React from 'react';
import './App.css';
import Post from './componenets/post.component';
import User from './componenets/user.component';



const App=(props)=> {
 
  
  
  return (
    <div>
      <Post postId={5}></Post>
      <User userId={5}/>
    </div>
  );
}


export default App;
