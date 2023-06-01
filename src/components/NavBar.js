import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  const file = "fileInclusion.html";
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        CLIENT
      </Link>
      <Link to="/command" className="nav-link">
        COMMAND
      </Link>
      <Link to="/searchCommandsByClient" className="nav-link">
        CLIENT'S COMMANDS
      </Link>
      <Link to={`/fileInclusion/${file}`} className="nav-link">
        FILE INCLUSION
      </Link>
      <Link to="ping" className="nav-link">
        COMMAND EXE
      </Link>
      <Link to="/emission" className="nav-link">
        EMISSION
      </Link>
    </div>
  );
}

export default NavBar;
