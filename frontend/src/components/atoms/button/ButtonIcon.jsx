import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ButtonIcon = ({
  children,
  className = "buttonIcon",
  onClick,
  icon = "fab fa-react",
  size = "2x",
  rotation,
  flip,
  to,
  state,
  replace,
  preventScrollReset,
}) => {
  return (
    <Link
      to={to}
      state={state}
      className={className}
      onClick={onClick}
      replace={replace}
      preventScrollReset={preventScrollReset}
    >
      {children || (
        <FontAwesomeIcon
          icon={icon}
          size={size}
          rotation={rotation}
          flip={flip}
        />
      )}
    </Link>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  flip: PropTypes.any,
  icon: PropTypes.any,
  onClick: PropTypes.any,
  preventScrollReset: PropTypes.any,
  replace: PropTypes.any,
  rotation: PropTypes.any,
  size: PropTypes.any,
  state: PropTypes.any,
  to: PropTypes.any,
};

export default ButtonIcon;
