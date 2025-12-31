
import axios from 'axios';
import {useState,useEffect} from 'react';

export default function Post(){
 const[text,setText]=useState('');
 const[posts,setPosts]=useState([]);

 useEffect(()=>{load()},[]);
 const load=async()=>{
  const res=await axios.get('http://localhost:5000/api/posts');
  setPosts(res.data);
 };

 const submit=async()=>{
  await axios.post('http://localhost:5000/api/posts',{text});
  setText(''); load();
 };

 const like=async(id)=>{
  await axios.put('http://localhost:5000/api/posts/like/'+id);
  load();
 };

 return(
  <div>
   <input placeholder="Post something" value={text} onChange={e=>setText(e.target.value)}/>
   <button onClick={submit}>Post</button>
   {posts.map(p=>(
    <div key={p._id}>
     <p>{p.text}</p>
     <button onClick={()=>like(p._id)}>Like {p.likes}</button>
    </div>
   ))}
  </div>
 );
}
