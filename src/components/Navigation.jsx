import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        {" "}
        <h1 className="navbar-header-link">SWpedia</h1>
      </Link>
      <div>
        <Link className="navbar-link" to={"/people/?page=1"}>
          People
        </Link>
        <Link className="navbar-link" to={"/films"}>
          Films
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
