import { bgImg } from "../utils/Constant";
import Header from "./Header";
import HomePage from "./HomePage";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import useMovieFetch from "../hooks/useMovieFetch";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import Button from "./ui/Button";
const Home = () => {
  useMovieFetch();
  const nowPlaying = useSelector((store) => store.movieData.nowPlayingList);
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <div className="h-screen bg-cover bg-center relative ">
        <div
          className={`${
            pathname === "/login" ? "h-full" : "h-4/5"
          } md:h-full absolute inset-0 bg-gradient-to-b from-black to-black ${
            pathname === "/login" ? "opacity-50" : "opacity-70"
          }`}
        ></div>
        <div
          className={`${
            pathname === "/login" ? "h-full" : "h-4/5"
          }  md:h-full w-full bg-cover bg-center`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {pathname === "/login" ? <Login /> : <HomePage />}
        </div>
        {pathname !== "/login" && (
          <>
            <div className="h-1 bg-gradient-custom"></div>
            <div className="h-full bg-gradient-to-b from-blue-950 to-black opacity-100 text-center px-8 md:px-32 pt-4">
              {nowPlaying && (
                <MovieCards title={"Now Playing"} movieData={nowPlaying} />
              )}
              <Link to={"/login"}>
                <Button text={"Explore More"} styles={"px-5 py-2 mt-10"} />
              </Link>
            </div>
          </>
        )}
     
      </div>
    </>
  );
};

export default Home;
