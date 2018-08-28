import React from "react";
import { Link } from "react-router-dom";
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__header-logo">PTPT</div>
          <div className="home__header-menu">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>FEATURE</li>
              </Link>
              <Link to="/">
                <li>CONTACT</li>
              </Link>
              <Link to="/">
                <li>SIGN IN</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
