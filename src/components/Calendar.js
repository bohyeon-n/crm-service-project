import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  render() {
    const myEventList =
      this.props.schedules === null ? [] : this.props.schedules;
    return (
      <div style={{ height: "80vh" }}>
        <BigCalendar events={myEventList} views={["month", "week", "day"]} />
      </div>
    );
  }
}
