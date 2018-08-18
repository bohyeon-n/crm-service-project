import React from "react";
import { Button, Form, Header, List } from "semantic-ui-react";
import moment from "moment";
const options = [
  { key: "active", text: "Active Client", value: "active" },
  { key: "former", text: "Former Client", value: "former" }
];
const date = moment().format("MMM Do YYYY");
export default class AddClientForm extends React.Component {
  handleChange = (e, { name, value }) => {
    const { handleClientUpdate } = this.props;

    handleClientUpdate(name, value);
  };
  render() {
    const { activeItem } = this.props;
    const {
      memo,
      memos,
      name,
      mobile,
      status,
      goal,
      injuries,
      condition
    } = this.props;

    return activeItem === "Info" ? (
      <React.Fragment>
        <Header as="h4" block>
          Basic Info
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <Form.Input
            label="Mobile"
            placeholder="Mobile"
            name="mobile"
            value={mobile}
            onChange={this.handleChange}
          />

          <Form.Select
            name="status"
            label="Client Status"
            placeholder="Client Status"
            options={options}
            value={status}
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
            w
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
