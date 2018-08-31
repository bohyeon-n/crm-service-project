import React from "react";
import { Button, Form, Header, List } from "semantic-ui-react";
import moment from "moment";
const statusOptions = [
  { key: "active", text: "Active Client", value: "active" },
  { key: "former", text: "Former Client", value: "former" }
];
const countOptions = [
  { key: 10, text: "10", value: 10 },
  { key: 20, text: "20", value: 20 },
  { key: 30, text: "30", value: 30 },
  { key: 50, text: "50", value: 50 },
  { key: 100, text: "100", value: 100 }
];
let countMove = {
  name: true,
  mobile: true,
  status: true,
  goal: true,
  injuries: true,
  trainer: true,
  count: true,
  memos: true,
  memo: true,
  condition: true
};
const date = moment().format("MMM Do YYYY");
export default class AddClientForm extends React.Component {
  handleChange = (e, { name, value }) => {
    const { handleClientUpdate } = this.props;
    handleClientUpdate(name, value);
    countMove[name] = false;
  };
  render() {
    const { activeItem } = this.props;
    const {
      name,
      mobile,
      status,
      goal,
      injuries,
      trainer,
      count,
      memo,
      condition
    } = this.props.client;

    const { memos } = this.props.client || [];
    const trainers = this.props.trainers || [];
    console.log(trainers);
    return activeItem === "Info" ? (
      <React.Fragment>
        <Header as="h4" block>
          Basic Info
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            label="Name"
            placeholder="Name"
            name="name"
            value={name || ""}
            onChange={this.handleChange}
          />

          <Form.Input
            required
            label="Mobile"
            placeholder="Mobile"
            name="mobile"
            value={mobile || ""}
            onChange={this.handleChange}
          />

          <Form.Select
            name="status"
            label="Client Status"
            placeholder="Client Status"
            options={statusOptions}
            value={status || ""}
            onChange={this.handleChange}
          />
          <Form.Field
            name="trainer"
            label="Select Trainer"
            value={trainer || ""}
            control="select"
            onChange={e => {
              const params = { name: e.target.name, value: e.target.value };
              this.handleChange(e, params);
            }}
          >
            {trainers.map(trainer => (
              <option key={trainer.id} value={trainer.name}>
                {trainer.name}
              </option>
            ))}
          </Form.Field>
          <Form.Input
            label="트레이닝 횟수선택"
            type="number"
            value={count || ""}
            placeholder="Number of training"
            name="count"
            onChange={this.handleChange}
          />
        </Form>
      </React.Fragment>
    ) : activeItem === "Assessments" ? (
      <React.Fragment>
        <Header as="h4" block>
          Assessments
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.TextArea
            label="Goal"
            name="goal"
            value={goal}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Injuries"
            name="injuries"
            value={injuries}
            onChange={this.handleChange}
          />
          <Form.TextArea
            label="Medical Conditions"
            name="condition"
            value={condition}
            onChange={this.handleChange}
          />
        </Form>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Header as="h4" block>
          Notes
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <div>{date}</div>
          <Form.Input
            inline
            onChange={this.handleChange}
            value={memo}
            name="memo"
          />
          <Form.Button positive content="Save" />
        </Form>
        <List divided relaxed>
          {memos.map(memo => (
            <List.Item>
              <List.Content verticalAlign>
                <List.Header>{memo.date}</List.Header>
                <List.Description>{memo.body}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </React.Fragment>
    );
  }
}
