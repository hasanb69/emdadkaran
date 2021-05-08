import React,{useState} from 'react'
import {auth} from '../../firebase/firebase'
const SignIn=()=>{
    const [user,setuser]=useState({email:'',password:''})
    const {email,password}=user
const handlechange=(e)=>{
     const {name,value}=e.target
     setuser({...user,[name]:value})
}     
const handlesubmit=async(e)=>{
    e.preventDefault()
    try {
        await auth.signInWithEmailAndPassword(email, password);
        const user = auth.currentUser
        console.log(user)
        setuser({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };

  return(
      <form onSubmit={handlesubmit}>
          <input type="email"
           name="email"
           value={email}
           onChange={handlechange}
           />

          <input type="password"
           name="password"
           value={password}
           onChange={handlechange}
           />
        <button type="submit">ورود</button>   
      </form>
  )
}

export default SignIn