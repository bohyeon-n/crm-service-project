import React from "react";
import { Modal, Button, Image, Header, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import TimePicker from "rc-time-picker";

const format = "h:mm a";

const trainners = [
  { name: "trainner1" },
  { name: "trainner2" },
  { name: "trainner3" }
];

export default class AddScheduleForm extends React.Component {
  state = {
    client: "",
    trainner: ""
  };
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChangeDate = async date => {
    await this.setState({
      start: date
    });
  };
  handleChangeTime = value => {
    this.setState({
      time: value
    });
  };
  handleSubmit = async e => {
    const { onAddSchedule } = this.props;
    let time = this.state.time || this.props.start;
    let start = this.state.start || this.props.start;
    const date = moment(start).set({
      hours: moment(time).format("H"),
      minutes: moment(time).format("mm"),
      second: moment(0).format("ss")
    });

    await this.setState({
      date: date
    });
    const trainner = this.state.trainner || trainners[0];
    const client = this.state.client || this.props.clients[0];
    const schedule = {
      client: client.name,
      trainner: trainner.name,
      start: moment(date).toDate(),
      end: moment(date)
        .add(1, "hours")
        .toDate(),
      allDay: false,
      title: client.name
    };
    onAddSchedule(schedule);
  };
  render() {
    const { close, open, clients } = this.props;
    const start = this.state.start || this.props.start;
    const end = this.state.end || this.props.end;
    const now = moment(start);
    const { trainner, client } = this.state;
    return (
      <Modal open={open} onClose={close}>
        <Modal.Header>ADD SCHEDULE</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              width={5}
              label="select trainner"
              control="select"
              name="trainner"
              onChange={this.handleChange}
              value={trainner}
            >
              {trainners.map(trainner => (
                <option value={trainner.name}>{trainner.name}</option>
              ))}
            </Form.Field>
            <Form.Field
              width={5}
              label="select client"
              control="select"
              name="client"
              onChange={this.handleChange}
              value={client}
            >
              {clients.map(client => (
                <option key={client.id} value={client.name}>
                  {client.name}
                </option>
              ))}
            </Form.Field>
            <Form.Field>
              <label>select date</label>
              <DatePicker
                selected={moment(start)}
                onChange={this.handleChangeDate}
              />
            </Form.Field>
            <Form.Field>
              <label>select time</label>
              <TimePicker
                onChange={this.handleChangeTime}
                format={format}
                defaultValue={now}
                showSecond={false}
                minuteStep={30}
                use12Hours
                inputReadOnly
                className="time-picker"
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={close}>
            BACK
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="ADD SCHEDULE"
            onClick={e => {
              this.handleSubmit();
              close();
            }}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
