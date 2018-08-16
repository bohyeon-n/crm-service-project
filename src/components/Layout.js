import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
const Layout = (Component, activeItem) => {
  return class Layout extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <Navigation activeItem={activeItem} />
          <Component />
        </React.Fragment>
      );
    }
  };
};

export default Layout;
