import React from "react";
import { Table, Button } from "semantic-ui-react";
import AddClientContainer from "../containers/AddClientContainer";

export default class ClientItem extends React.Component {
  state = {
    click: false
  };
  handleClick = () => {
    this.setState({
      click: false
    });
  };
  render() {
    const { id, name, mobile } = this.props.client;
    return (
      <Table.Row>
        <Table.Cell>
          <div>{name}</div>
        </Table.Cell>
        <Table.Cell>
          <div>{mobile}</div>
        </Table.Cell>
        <Table.Cell>
          <Button>summary</Button>
        </Table.Cell>
        <Table.Cell>
          {this.state.click ? (
            <AddClientContainer
              edit={true}
              client={this.props.client}
              handleClick={this.handleClick}
            />
          ) : null}
          <button
            onClick={e => {
              this.setState({ click: true });
            }}
          >
            edit
          </button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
