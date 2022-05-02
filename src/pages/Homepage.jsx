import "./Styling/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="chat-bubble-container">
        <div className="chat-bubble">
          <h3>Welcome to the Star Wars Encyclopedia</h3>
          <p className="mt-1">
            Click on the links and baby Yoda will lead you to where you want to
            go!
          </p>
          <div>
            <Link className="navbar-link" to={"/people"}>
              People
            </Link>
            <Link className="navbar-link" to={"/films"}>
              Films
            </Link>
          </div>
        </div>
        <div className="small-chat-circle"></div>
        <div className="small-chat-circle"></div>
        <div className="small-chat-circle"></div>
      </div>
    </div>
  );
};

export default Homepage;
