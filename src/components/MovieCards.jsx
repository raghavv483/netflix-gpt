import PropTypes from "prop-types";
import { POSTER_IMG_URL } from "../utils/Constant";
const MovieCards = ({ movieData, title }) => {
  return (
    <div className="my-5">
      <h1 className="text-2xl font-bold py-5 px-10 ">{title}</h1>
      <div className="flex gap-5 px-10 overflow-x-scroll scrollbar-hide">
        {movieData.map((items) => (
          <div key={items.id} className="flex-none">
            <img
              src={POSTER_IMG_URL + items.poster_path}
              alt={items.original_title}
              className="w-52 h-64 sm:h-80 object-cover hover:scale-95 transition-all duration-150 ease-in"
            />
            <div className="text-center mt-1">
              <h1 className="text-lg font-semibold truncate w-52">
                {items.original_title}
              </h1>
              <h2 className="text-md">
                {new Date(items.release_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
MovieCards.propTypes = {
  movieData: PropTypes.array,
  title: PropTypes.string,
};
export default MovieCards;
