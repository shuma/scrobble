import React from "react";
const Header = ({ location, company }) => (
  <header className="masthead clear">
    <div className="centered">
      <div className="site-branding">
        <span className="site-channel">
          <p>{location}</p>
        </span>
        <h1 className="site-title">{company}</h1>
      </div>
    </div>
  </header>
);

export default Header;
