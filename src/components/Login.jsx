import { useState, useRef } from "react";
import FormValidation from "../utils/FormValidation.js";
import Button from "./ui/Button";
import HandleLogin from "../utils/HandleLogin.js";
const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignUp = () => {
    setSignUp(!signUp);
  };
  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = FormValidation(
      signUp ? name.current.value : null,
      email.current.value,
      pass.current.value
    );
    setErrorMessage(message);
    if (message !== null) return;
    HandleLogin(signUp, setErrorMessage, message, email, pass);
  };
  return (
    <div className="relative mx-auto top-36 w-4/5 lg:w-2/5 p-10 md:p-16 bg-black bg-opacity-50">
      <h1 className="text-4xl font-bold mb-5">
        {signUp ? "Sign Up" : "Sign In"}
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        {signUp && (
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
          />
        )}
        <input
          type="email"
          placeholder="Enter Email"
          ref={email}
          className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
        />
        <input
          type="password"
          placeholder="Password"
          ref={pass}
          className="py-3 border-2 border-slate-300 bg-black bg-opacity-60 px-5"
        />
        <p className="text-red-600">{errorMessage}</p>
        <Button styles="py-2" text={signUp ? "Sign Up" : "Sign In"} />
        <p onClick={toggleSignUp}>
          <span className="text-gray-300">
            {!signUp ? "New to Netflix? " : " Already a User? "}
          </span>
          <span className="cursor-pointer">
            {!signUp ? "Sign up now" : " Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
