import propTypes from "prop-types";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="relative w-full h-5/6 sm:h-full overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&fs=1&modestbranding=1&rel=0`}
        allow="autoplay; fullscreen"
        className="absolute top-0 left-0 w-full h-full"
        style={{ aspectRatio: "16/9" }}
      ></iframe>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoId: propTypes.string.isRequired,
};

export default YouTubeEmbed;
