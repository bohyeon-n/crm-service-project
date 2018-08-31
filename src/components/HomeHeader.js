import React from "react";
import { Link } from "react-router-dom";
export default class HomeHeader extends React.Component {
  render() {
    const { isPc } = this.props;
    return (
      <div className="home">
        <div className="home__header">
          <div className="home__header-logo">PTPT</div>
          <div className="home__header-menu">
            <ul>
              {isPc ? (
                <React.Fragment>
                  <Link to="/">
                    <li>HOME</li>
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Link to="/">
                    <li>SIGN IN</li>
                  </Link>
                  <Link to="/">
                    <li>SIGN UP</li>
                  </Link>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
