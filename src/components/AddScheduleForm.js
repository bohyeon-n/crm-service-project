import React from "react";
import {
  Modal,
  Button,
  Image,
  Header,
  Form,
  Dropdown
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import TimePicker from "rc-time-picker";

const format = "h:mm a";

export default class AddScheduleForm extends React.Component {
  state = {
    client: "",
    trainer: ""
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
  handleChangeClient = (e, { value }) => {
    this.setState({
      client: value
    });
  };
  handleSubmit = async e => {
    const { onAddSchedule, trainers, clients } = this.props;
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
    const trainer = this.state.trainer || trainers[0].name;
    const client = this.state.client || clients[0].name;
    const schedule = {
      client: client,
      trainer: trainer,
      start: moment(date).toDate(),
      end: moment(date)
        .add(1, "hours")
        .toDate(),
      allDay: false,
      title: `${client} /${trainer}`
    };
    onAddSchedule(schedule);
  };
  render() {
    const { close, open, clients, trainers } = this.props;
    const start = this.state.start || this.props.start;
    const end = this.state.end || this.props.end;
    const now = moment(start);
    const { trainer, client } = this.state;
    return (
      <Modal open={open} onClose={close}>
        <Modal.Header>ADD SCHEDULE</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field width={5}>
              <Dropdown
                placeholder="Choose a Trainer"
                name="trainer"
                onChange={(e, { value }) => {
                  console.log(e);
                  this.setState({
                    trainer: value
                  });
                }}
                selection
                value={this.state.trainer}
                options={trainers.map(trainer => ({
                  key: trainer.id,
                  value: trainer.name,
                  text: trainer.name
                }))}
                search
              />
            </Form.Field>
            <Form.Field width={5}>
              <label htmlFor="">Select a Client</label>
              <Dropdown
                placeholder="Choose a client"
                name="client"
                onChange={this.handleChangeClient}
                selection
                value={this.state.client}
                options={clients.map(client => ({
                  key: client.id,
                  value: client.name,
                  text: `${client.name} / ${client.count}`
                }))}
                search
              />
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
