import React from "react";
import { Modal, Button, Image, Header, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import TimePicker from "rc-time-picker";

const format = "h:mm a";

export default class AddScheduleForm extends React.Component {
  state = {
    client: ""
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
    let { time } = this.state;
    let start = this.state.start || this.props.start;
    const date = moment(start).set({
      hours: moment(time).format("H"),
      minutes: moment(time).format("mm")
    });

    await this.setState({
      date: date
    });

    console.log(moment(this.state.date).format());
  };
  render() {
    const { close, open, clients } = this.props;
    const start = this.state.start || this.props.start;
    const end = this.state.end || this.props.end;
    const now = moment(start)
      .hour(0)
      .minute(0);
    return (
      <Modal open={open} onClose={close}>
        <Modal.Header>ADD SCHEDULE</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field
              width={5}
              label="select client"
              control="select"
              name="client"
              onChange={this.handleChange}
              value={this.state.client}
            >
              {clients.map(client => (
                <option key={client.id} value={client.name}>
                  {client.name}
                </option>
              ))}
            </Form.Field>
          </Form>
          <DatePicker
            selected={moment(start)}
            onChange={this.handleChangeDate}
          />

          <TimePicker
            onChange={this.handleChangeTime}
            format={format}
            defaultValue={now}
            showSecond={false}
            minuteStep={10}
            use12Hours
            inputReadOnly
            className="time-picker"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={close}>
            Nope
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yep, that's me"
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
