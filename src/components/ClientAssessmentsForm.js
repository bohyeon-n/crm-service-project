import React from "react";
import { Form, Header } from "semantic-ui-react";
export default class ClientAssessmentsForm extends React.Component {
  state = {
    goal: "",
    injuries: "",
    condition: ""
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };
  handleSubmit = () => {
    const { goal, injuries, condition } = this.state;
    console.log(this.state);
  };
  render() {
    const { goal, injuries, condition } = this.state;
    return (
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
    );
  }
}
