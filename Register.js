
import axios from 'axios';
import {useState} from 'react';

export default function Register(){
 const[name,setName]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

 const submit=async()=>{
  await axios.post('http://localhost:5000/api/auth/register',{name,email,password});
  alert('Registered');
 };

 return(
  <div>
   <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
   <button onClick={submit}>Register</button>
  </div>
 );
}
