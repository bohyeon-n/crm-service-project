import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
export default class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <HomeMain />
      </React.Fragment>
    );
  }
}
