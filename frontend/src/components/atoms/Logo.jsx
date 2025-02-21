import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = ({ onClick, icon = "fab fa-react", text = "Logo" }) => {
  return (
    <div className="flex items-center gap-0.5 select-none" onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" />
      <p className="text-2xl font-bold tracking-tighter">{text}</p>
    </div>
  );
};

Logo.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Logo;
