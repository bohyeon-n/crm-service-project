import React from "react";
import BigCalendar from "react-big-calendar";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop/";
import { Segment, Modal, Popup, Icon } from "semantic-ui-react";
import moment from "moment";
import AddScheduleContainer from "../containers/AddScheduleContainer";
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
BigCalendar.momentLocalizer(moment);

class Event extends React.Component {
  state = {
    open: false
  };
  render() {
    const { event } = this.props;
    return (
      <div className="calendar__event-popup">
        <Popup trigger={<div>{event.title}</div>} on="click">
          <Popup.Header>{event.title}</Popup.Header>
          <Popup.Content className="calendar__evnet-popup">
            <div>
              client:
              {event.client}
            </div>
            <div>
              trainer:
              {event.client}
            </div>
            <div>
              시간:
              {moment(event.start).format()}
            </div>
          </Popup.Content>
        </Popup>
      </div>
    );
  }
}

export default class Calendar extends React.Component {
  state = {
    active: false,
    start: "",
    end: "",
    isSelectEventOpen: false
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
            popup={true}
            selectable
            onSelectEvent={this.toggleEventModal}
            events={myEventList}
            onSelectSlot={this.handleSelect}
            views={["month", "week", "day"]}
            components={{ event: Event }}
          />
        </div>
      </React.Fragment>
    );
  }
}
