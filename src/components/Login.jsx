import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,iseErrorMessage]=useState(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
        //Validate the form data
         
       const message = checkValidData(email.current.value,password.current.value);
        iseErrorMessage(message);
        console.log(email.current.value);
        console.log(password.current.value);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="bg">
                </img>
            </div>
            <form 
            onSubmit={(e)=>{e.preventDefault()}}
            className="p-12 bg-black absolute w-3/12 my-30 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder=" Name" className="bg-gray-700 text-white rounded-md p-4 my-4 w-full"></input>)}
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