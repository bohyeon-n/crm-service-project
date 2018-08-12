import React from "react";
import ClientItem from "../components/ClientItem";
import { Table } from "semantic-ui-react";

export default class ClientList extends React.Component {
  static defaultProps = {
    clients: [
      {
        id: 1,
        name: "",
        mobile: null
      }
    ],
    loading: false,
    errorMsg: null
  };
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }

  render() {
    const { id, clients, loading, errorMsg } = this.props;
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Mobile</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {loading ? (
            <div>...loading</div>
          ) : errorMsg ? (
            <div>{errorMsg}</div>
          ) : clients.length > 0 ? (
            clients.map(({ id, name, mobile }) => (
              <ClientItem key={id} id={id} name={name} mobile={mobile} />
            ))
          ) : (
            <div>등록된 회원이 없습니다.</div>
          )}
        </Table.Body>
      </Table>
    );
  }
}
