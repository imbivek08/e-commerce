import React, { useState } from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  const [state, setState] = useState("Sign Up")
  return (
    <div className='container'>
      <div className='children'>
        <h2>{state}</h2>
        <div className='login-input'>
          {state==="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </div>
        <div className='login-message'>
          {state==="Login"?<p>create an accout? <span onClick={()=>setState("Sign Up")}>Click here</span></p>:
          <p>have account? <span onClick={()=>setState("Login")}>Click here</span></p>}
        </div>
        <div className='user-aggrement'>
          <input type="checkbox" />
          <p>By Continuing, i agree to the term of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
