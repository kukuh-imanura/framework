import PropTypes from "prop-types";
const Heading = ({
  className = "text-center",
  onClick,
  title = "Title",
  subtitle = "Subtitle",
  level = 1,
}) => {
  return (
    <div className={`${className}`} onClick={onClick}>
      {level === 1 && <h1>{title}</h1>}
      {level === 2 && <h2>{title}</h2>}
      {level === 3 && <h3>{title}</h3>}
      {level === 4 && <h4>{title}</h4>}
      {level === 5 && <h5>{title}</h5>}
      {level === 6 && <h6>{title}</h6>}
      <p>{subtitle}</p>
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.any,
  level: PropTypes.any,
  onClick: PropTypes.any,
  subtitle: PropTypes.any,
  title: PropTypes.any,
};

export default Heading;
