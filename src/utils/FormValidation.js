import PropTypes from "prop-types";
const FormValidation = (name, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPassValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
  if (!isEmailValid) return "Email is not valid";
  if (!isPassValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";

  return null;
};

FormValidation.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default FormValidation;
