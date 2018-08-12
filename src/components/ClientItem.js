import React from "react";
import { Table, Button } from "semantic-ui-react";

export default class ClientItem extends React.Component {
  render() {
    const { id, name, mobile } = this.props;
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
          <Button>edit</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
