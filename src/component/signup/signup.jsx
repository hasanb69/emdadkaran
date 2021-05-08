import React,{useState} from 'react'
import {auth,createUserProfileDocument} from '../../firebase/firebase'
import {SignUpForm,Input,Button} from './signup.style'
const SignUp=()=>{
     const [user,setuser]=useState({displayName:'',password:'',confirmpassword:'',email:''})  
     const {displayName,password,confirmpassword,email} =user
     const handleChange=(e)=>{
         const {name,value}=e.target
         setuser({...user,[name]:value})


      
     }
     const handlesubmit=async (e)=>{
              e.preventDefault()
              if(password != confirmpassword){
                alert('password dont match')
                return;
            }
            try{
                    const {user}=await auth.createUserWithEmailAndPassword(
                        email,
                        password
                    )
                 await   createUserProfileDocument(user,{displayName})
                 setuser({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmpassword:''
                 })
            }
            catch(error){
                console.log(error)
            }
     }
    return(
        <div className="signup">
            <SignUpForm onSubmit={handlesubmit} >
                <Input type="text"
                  value={displayName}
                  onChange={handleChange}
                  name="displayName"
                  label="usename"
                  />

                 <Input type="password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  label="password"
                  />
                  <Input type="password"
                  value={confirmpassword}
                  onChange={handleChange}
                  name="confirmpassword"
                  label="confirmpassword"
                  />
                 <Input type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  label="email"
                  />
                  <Button type="submit">ثبت نام</Button>
            </SignUpForm>
        </div>
    )
}

export default SignUp