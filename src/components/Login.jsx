import Header from "./Header"

const Login=()=>{
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="bg">
                </img>
            </div>
            <form className="p-12 bg-opacity absolute w-3/12 my-50 mx-auto right-0 left-0 text-white rounded-lg ">
                <h1 className="font-bold text-3xl py-4">Sign In</h1>
                <input type="text" placeholder=" Email Address" className="bg-gray-700 text-black rounded-md p-4 my-4 w-full"></input>
                <input type="password" placeholder="Password" className="bg-gray-700 rounded-md text-black p-4 my-4 w-full"></input>
                <button className="bg-red-500 p-4 my-6 text-cyan-50 rounded-md w-full">Sign In</button>
            </form>
        </div>
    ) 
}
export default Login