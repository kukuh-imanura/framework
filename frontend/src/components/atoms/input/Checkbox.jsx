import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useId } from "react";

const Checkbox = ({
  className,
  label = "Label",
  leading = false,
  size = "md",
}) => {
  const id = useId();

  size = leading ? "lg" : size;

  className = clsx(leading ? "checkLeading" : "checkInput");
  const inputClass = clsx("peer", {
    "h-3 w-3": size === "sm",
    "h-5 w-5": size === "lg",
  });
  const iconSize = clsx({
    "2xs": size === "sm",
    xs: size === "md",
  });

  return (
    <div className={className}>
      {leading && <label htmlFor={id}>{label}</label>}

      <div className="checkBox">
        <input type="checkbox" name="" id={id} className={inputClass} />
        <FontAwesomeIcon
          icon={"fas fa-check"}
          size={iconSize}
          className="checkIcon peer-checked:opacity-100"
        />
      </div>

      {!leading && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.any,
  label: PropTypes.string,
  leading: PropTypes.bool,
  size: PropTypes.string,
};

export default Checkbox;
