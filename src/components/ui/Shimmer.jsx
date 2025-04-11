const ShimmerMovieCards = () => {
    return (
      <div className="my-5 flex justify-center items-center">
        <div className="flex gap-5 px-10 overflow-x-auto scrollbar-hide">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex-none">
              <div className="bg-gray-300 animate-pulse w-52 h-64 sm:h-80"></div>
              <div className="text-center mt-1">
                <div className="bg-gray-300 animate-pulse h-4 w-52 mb-1"></div>
                <div className="bg-gray-300 animate-pulse h-4 w-32 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerMovieCards;
  