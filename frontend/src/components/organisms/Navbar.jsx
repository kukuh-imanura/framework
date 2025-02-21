import PropTypes from "prop-types";
import Logo from "@atoms/Logo";
import { Link } from "react-router-dom";
import Button from "@atoms/Button";

const Navbar = ({ children, className, onClick }) => {
  return (
    <nav
      className={`${className} sticky top-0 flex items-center justify-between px-5 py-3`}
      onClick={onClick}
    >
      <Logo />

      <nav className="flex gap-3">
        {children || (
          <>
            <Link to={"/"}>Menu</Link>
            <Link to={"/"}>Menu</Link>
            <Link to={"/"}>Menu</Link>
          </>
        )}
      </nav>

      <div>
        <Button to={"/"} />
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
