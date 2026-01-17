import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
         <div  className='absolute'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg"
        alt="logo"
        />
    </div>
    <form className='absolute left-0 right-0 w-4/12 p-12 mx-auto text-white bg-black rounded-lg bg-opacity-80 my-36'>
    <h1 className='py-4 text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder="Full Name"  className="w-full p-2 my-4 bg-gray-700"/>) }
      <input type="text" placeholder="Email Address"  className="w-full p-2 my-4 bg-gray-700"/> 
      <input type="password" placeholder="Password"  className="w-full p-2 my-4 bg-gray-700"/> 
      <button className="w-full p-4 my-6 bg-red-600">{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Allready registerd? Sign In now"} </p>

    </form>
    </div> 
  )
}

export default Login