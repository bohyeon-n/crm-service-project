import React from "react";
import { Button, Form, Header, List } from "semantic-ui-react";
import moment from "moment";
export default class ClientNoteForm extends React.Component {
  date = moment().format("MMM Do YYYY");
  state = {
    memo: "",
    memos: [
      { date: "date1", body: "memo1" },
      { date: "date2", body: "memo2" },
      { date: "date3", body: "memo3" }
    ]
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };
  handleSubmit = () => {
    this.setState({
      memos: [
        ...this.state.memos,
        {
          date: this.date,
          body: this.state.memo
        }
      ]
    });
    this.setState({
      memo: ""
    });
  };
  render() {
    const { memo, memos } = this.state;
    const date = this.date;
    return (
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
