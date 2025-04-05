import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser} from '../utils/userSlice';
import { useLocation } from 'react-router-dom';
import { LOGO, signOutLogo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
     // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
});
  }

  const handleGptSearchClick=()=>{
    //toggle GPT search
    dispatch(toggleGptSearchView());
  }

    useEffect((()=>{
      const  unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {email,displayName,uid,photoURL} = user;
        dispatch(addUser({uid : uid, email: email, displayName: displayName , photoURL:photoURL}));
        // ... 
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }), []) 
  return (
    <div className='absolute z-12 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
      <img
      className='w-44'
      src={LOGO}
      alt="logo"></img>
      {location.pathname === "/browse" && <div className='flex p-2'>
        <button className='text-white cursor-pointer p-4 m-2 font-bold bg-purple-600 rounded-md'
        onClick={handleGptSearchClick}>
          {showGptSearch ? "Home Page" : "GPT Search"}</button>
        <img 
        alt='signOutLogo'
        src={signOutLogo}
        className='w-12 h-12'></img>
        <button 
        onClick={handleSignOut}
        className='cursor-pointer font-bold text-white '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header