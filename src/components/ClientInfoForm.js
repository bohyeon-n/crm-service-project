import React from "react";
import { Form, Segment, Header, Grid } from "semantic-ui-react";

const options = [
  { key: "active", text: "Active Client", value: "active" },
  { key: "former", text: "Former Client", value: "former" }
];
export default class ClientInfoForm extends React.Component {
  state = {
    name: "",
    mobile: "",
    status: "active",
    submittedName: "",
    submittedMobile: "",
    submittedStatus: ""
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };
  handleSubmit = () => {
    const { name, mobile, status } = this.state;
  };
  render() {
    const {
      name,
      mobile,
      submittedMobile,
      submittedName,
      status,
      submittedStatus
    } = this.state;
    return (
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
    );
  }
}
