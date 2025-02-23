import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useId } from "react";

const Input = ({
  inline,
  label,
  type = "text",
  placeholder,
  name,
  className,
  register,
  rules,
  error,
  helper,
  leading,
  trailing,
}) => {
  const id = useId();

  className = clsx(className, { "pl-8": leading, "pr-8": trailing });

  return (
    <div
      className={`flex select-none ${inline ? "items-center justify-between gap-3" : "flex-col"}`}
    >
      <div className="flex justify-between">
        {label && (
          <label htmlFor={id} className="font-semibold text-black">
            {label}
          </label>
        )}
        {helper && <p className="textDisabled pr-1">{helper}</p>}
      </div>

      <div className="relative flex items-center">
        {leading && (
          <FontAwesomeIcon
            icon={leading}
            className="textDisabled absolute w-9"
          />
        )}

        <input
          id={id}
          className={className}
          type={type}
          placeholder={placeholder}
          {...(register ? register(name, rules) : {})} // Cegah error jika register undefined
        />

        {trailing && (
          <FontAwesomeIcon
            icon={trailing}
            className="textDisabled absolute right-0 w-9"
          />
        )}
      </div>

      {error && <p className="textError">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.any,
  error: PropTypes.any,
  helper: PropTypes.string,
  inline: PropTypes.any,
  label: PropTypes.string,
  leading: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.any,
  trailing: PropTypes.any,
  type: PropTypes.string,
};

export default Input;
