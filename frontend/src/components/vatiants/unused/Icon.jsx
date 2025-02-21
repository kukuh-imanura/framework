import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({
  className = "",
  onClick,
  icon = "",
  size = "1x",
  rotation = 0,
  flip = "",
}) => {
  if (!icon) return;

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      rotation={rotation}
      flip={flip}
      className={className}
      onClick={onClick}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  flip: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rotation: PropTypes.number,
  size: PropTypes.string,
};

export default Icon;
