import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
export default class MainPage extends React.Component {
  state = {
    width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnMount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const isPc = this.state.width > 961;
    return (
      <React.Fragment>
        <HomeHeader isPc={isPc} />
        <HomeMain isPc={isPc} />
      </React.Fragment>
    );
  }
}
