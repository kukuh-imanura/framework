import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  onClick,
  text = "Button",
  to,
  state,
  replace,
  preventScrollReset,
  leading,
  trailing,
  type = "primary",
}) => {
  className = className
    ? className
    : clsx("button", {
        buttonPrimary: type === "primary",
        buttonSecondary: type === "secondary",
      });

  return (
    <Link
      to={to}
      state={state}
      className={className}
      onClick={onClick}
      replace={replace}
      preventScrollReset={preventScrollReset}
    >
      {leading && <FontAwesomeIcon icon={leading} />}
      {children || text}
      {trailing && <FontAwesomeIcon icon={trailing} />}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  leading: PropTypes.any,
  onClick: PropTypes.any,
  preventScrollReset: PropTypes.any,
  replace: PropTypes.any,
  state: PropTypes.any,
  text: PropTypes.string,
  to: PropTypes.any,
  trailing: PropTypes.any,
  type: PropTypes.any,
};

export default Button;
