import Button from "./ui/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="px-15 relative top-1/4 md:top-1/3 z-10 mx-auto text-center w-full md:w-3/4 xl:w-1/2 md:py-4 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold lg:leading-snug">
        Unlimited movies, TV shows and more
      </h1>
      <h2 className="mt-4 md:text-xl ">Starts at ₹149. Cancel at any time.</h2>
      <h3 className="mt-3 md:mt-5 ">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <Link to={"/login"}>
        <Button
          styles={"mt-4 px-6 py-2 text-lg font-bold"}
          text={"Get Started >"}
        />
      </Link>
    </div>
  );
};

export default HomePage;
