import PropTypes from "prop-types";
const Button = ({ styles, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 rounded-md hover:bg-red-700 ${styles}`}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
