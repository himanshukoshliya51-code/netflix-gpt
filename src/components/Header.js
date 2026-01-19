import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOOut = () => {
    signOut(auth).then(() => {
      navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
        navigate("/error");

});
  };
  return (
    <div className="absolute z-10 flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black">
      
       <img 
       className="w-44"
       src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
       alt="logo"
       />

      {user && (<div className='flex p-2'>
        <img
        className='w-12 h-12 ' 
         alt="usericon" src={user?.photoURL}
        />
        <button onClick={handleSignOOut} className='font-bold text-white'>Sign Out</button>
       </div>
)}
    </div>
  )
}

export default Header