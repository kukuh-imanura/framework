import PropTypes from "prop-types";
import Logo from "@mols/Logo";
import { Link } from "react-router-dom";
import Button from "@btns/Button";

const Navbar = ({ children, className, onClick }) => {
  return (
    <nav
      className={`${className} sticky top-0 flex w-full items-center justify-between px-5 py-3`}
      onClick={onClick}
    >
      <Logo text="Frontend" />

      <nav className="flex gap-3">
        {children || (
          <>
            <Link to={"/"}>Home</Link>
            <Link to={"/components"}>Components</Link>
          </>
        )}
      </nav>

      <div>
        <Button to={"/login"} text="Login" />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.any,
};

export default Navbar;
