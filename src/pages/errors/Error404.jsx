import { Link } from "react-router-dom";

// *Custom Hooks Import*
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Error404 = (props) => {
  useDocumentTitle(`${props.title} | Quest Casino`);

  return (
    <div className="errorContainer">
      <p>
        <span>Error 404:</span> Page not found.
      </p>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Error404;
