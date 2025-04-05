import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { bgLoginPage } from "../utils/constants";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,iseErrorMessage]=useState(null);
  
    const dispatch=useDispatch()
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
        //Validate the form data
         
       const message = checkValidData(email.current.value,password.current.value);
        iseErrorMessage(message);
        if(message) return;

        //if message !=NULL THE sign in sign up whill be there
        if(!isSignInForm){
            //signup page
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        

        return updateProfile(user, {
            displayName: name.current.value,
            photoURL: ""
        })
        .then(() => {
           const {email,displayName,uid,photoURL} = auth.currentUser;
           dispatch(addUser({uid : uid, email: email, displayName: displayName , photoURL:photoURL}));
          
        });
    })
    .catch((error) => {
        console.error("Error:", error.code, error.message);
        iseErrorMessage(error.message);
    });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            const user = userCredential.user;
          })
            .catch((error) => {
                
                
             const errorCode = error.code;
             const errorMessage = error.message;
          });
        }
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
                src={bgLoginPage}
                alt="bg">
                </img>
            </div>
            <form 
            onSubmit={(e)=>{e.preventDefault()}}
            className="p-12 bg-black absolute w-3/12 my-30 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input 
                ref={name} type="text" placeholder=" Name" className="bg-gray-700 text-white rounded-md p-4 my-4 w-full"></input>)}
                <input
                ref={email}
                 type="text" placeholder=" Email Address" className="bg-gray-700 text-white    rounded-md p-4 my-4 w-full"></input>

                <input 
                ref={password}
                type="password" placeholder="Password" className="bg-gray-700 rounded-md text-white p-4 my-4 w-full"></input>

                <p className="text-red-500 font-bold">{errorMessage}</p>

                <button className="bg-red-500 cursor-pointer p-4 my-6 text-cyan-50 rounded-md w-full" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>

                <p className="py-4 cursor-pointer"  onClick={toggleSignInForm}>{isSignInForm?"New to Nerflix? Sign Up Now":"Already registered? Sign In Now"}</p>
            </form>
        </div>
    ) 
}
export default Login