import React,{useState,useRef} from "react";

import {signup,login,logout,useAuth} from './firebase.js';




function App() {

const[loading,setLoading]=useState(false);

const currentUser=useAuth() ;



const emailRef=useRef() ;
const passwordRef=useRef() ;


async function handleSignup() {
    setLoading(true);
    await signup(emailRef.current.value, passwordRef.current.value)
    setLoading(false); 
}
async function handleLogin() {
    setLoading(true);
    try{
        await login(emailRef.current.value, passwordRef.current.value)
    }catch{
     alert('First Create Email Account');
    }
    setLoading(false);
}

async function handleLogout() {
    setLoading(true);
    try{
        await logout()
    }catch{
  alert('User Account Creation is Successfully Logout')
    }
    setLoading(false);
}


    return(
       
          <div className="jv">
            <h3>current User :{currentUser?.email}</h3>
            <input ref={emailRef} type='text' placeholder="Email"/><br/><br/>
            <input ref={passwordRef} type='password' placeholder="Password" /><br/><br/>
            <button disabled={loading || currentUser} onClick={handleSignup} className='a' >signup</button>
            <button disabled={loading || currentUser} onClick={handleLogin} className='b' >Login</button>
            <button disabled={loading || !currentUser}  onClick={handleLogout} className='c' >LogOut</button>
            </div>
        
    )
}
export default App;
