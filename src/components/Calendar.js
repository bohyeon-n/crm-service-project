import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import { Segment } from "semantic-ui-react";

import AddScheduleContainer from "../containers/AddScheduleContainer";
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  state = {
    active: false,
    start: "",
    end: ""
  };
  handleSelect = async ({ start, end }) => {
    await this.setState({
      start: start,
      end: end,
      active: true
    });
  };
  close = () => this.setState({ active: false });
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  render() {
    const { active, start, end } = this.state;
    const myEventList =
      this.props.schedules === null ? [] : this.props.schedules;
    return (
      <React.Fragment>
        {active ? (
          <AddScheduleContainer
            close={this.close}
            open={active}
            start={start}
            end={end}
          />
        ) : null}

        <div className="clients__title">
          <Segment>MANAGEMENT SCHEDULES</Segment>
        </div>
        <div style={{ height: "80vh" }}>
          <BigCalendar
            selectable
            onSelectEvent={event => alert(event.title)}
            events={myEventList}
            onSelectSlot={this.handleSelect}
            views={["month", "week", "day"]}
          />
        </div>
      </React.Fragment>
    );
  }
}
