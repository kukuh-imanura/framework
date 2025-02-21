import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  className = "bg-brand-dark text-light dark:bg-brand dark:text-dark",
  text = "Button",
  to,
  state,
}) => {
  return (
    <Link
      to={to}
      state={state}
      className={`${className} rounded-md px-3 py-2`}
      onClick={onClick}
    >
      {children || text}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
  state: PropTypes.any,
  text: PropTypes.string,
  to: PropTypes.any,
};

export default Button;
