import PropTypes from "prop-types";
import ButtonIcon from "./../atoms/button/ButtonIcon";

const Logo = ({ onClick, icon = "fab fa-react", text = "Logo" }) => {
  return (
    <div className="flex items-center gap-0.5 select-none" onClick={onClick}>
      <ButtonIcon
        icon={icon}
        size={"2x"}
        className="cursor-default text-black dark:text-white"
      />
      <h4 className="tracking-tighter">{text}</h4>
    </div>
  );
};

Logo.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Logo;
