import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./ComponentStyling/Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar-container">
      <Navbar.Brand className="navbar-header-link" as={Link} to="/">
        SWpedia
      </Navbar.Brand>
      <Nav>
        <Nav.Link className="navbar-link" as={NavLink} to="/people/?page=1" end>
          People
        </Nav.Link>
        <Nav.Link className="navbar-link" as={NavLink} to="/films/" end>
          Films
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Navigation;
