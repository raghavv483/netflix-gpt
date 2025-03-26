import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser} from '../utils/userSlice';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
     // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
});
  }
  useEffect((()=>{
    onAuthStateChanged(auth, (user) => {
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
  }), []) 
  return (
    <div className='absolute z-12 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
      <img
      className='w-44'
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"></img>
      {location.pathname === "/browse" && <div className='flex p-2'>
        <img 
        alt='signOutLogo'
        src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e'
        className='w-12 h-12'></img>
        <button 
        onClick={handleSignOut}
        className='cursor-pointer font-bold text-white '>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header