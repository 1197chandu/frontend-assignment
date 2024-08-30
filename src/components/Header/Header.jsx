import React from "react";
import { NETFLIX_LOGO } from "../../utils/constant";

const Header = () => {
  return (
    <div>
      <header className="app-header">
        <div className="logo">
          <img src={NETFLIX_LOGO} alt="Movie App Logo" className="logo-image" />
        </div>
      </header>
    </div>
  );
};

export default Header;
