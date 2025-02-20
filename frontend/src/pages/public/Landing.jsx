import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div>
      <h2>Landing</h2>
      <FontAwesomeIcon icon={"fa-house"} />
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Landing;
