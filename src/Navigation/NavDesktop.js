import React from "react";
import "./NavDesktop.scss";
import { Link } from "react-router-dom";

//import { fetchHero } from "../Actions";

const NavDesktop = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="nav-bg">
      <div className="NavDesktop">
        <div>
          <Link to="/" className="link-to">
            HeroSearch
          </Link>
        </div>
        <div className="nav-times">
          <span>
            <Link to="/" className="link-to">
              Home
            </Link>
          </span>
          <span>
            <Link to="/heroes" className="link-to">
              Heroes
            </Link>
          </span>
          <form>
            <input
              type="text"
              placeholder="Search your Hero"
              autoComplete="off"
              spellCheck="false"
              autoFocus
              onChange={handleChange}
            />
            <button onSubmit={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;

// Character name: (response.data.data.results[0].name)
// Character description: (response.data.data.results[0].description)
// Character image: (response.data.data.results[0].thumbnail.path)
