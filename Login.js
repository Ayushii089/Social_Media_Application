
import axios from 'axios';
import {useState} from 'react';

export default function Login(){
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

 const submit=async()=>{
  const res=await axios.post('http://localhost:5000/api/auth/login',{email,password});
  localStorage.setItem('token',res.data.token);
  alert('Login success');
 };

 return(
  <div>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
   <button onClick={submit}>Login</button>
  </div>
 );
}
