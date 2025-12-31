
import React from 'react';
import Login from './Login';
import Register from './Register';
import Post from './Post';

function App(){
 return(
  <div className="container">
   <h2>Social Media App</h2>
   <Login/>
   <Register/>
   <Post/>
  </div>
 );
}
export default App;
