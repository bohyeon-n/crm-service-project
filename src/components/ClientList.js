import React from "react";
import ClientItem from "../components/ClientItem";
import { Table, Menu } from "semantic-ui-react";

export default class ClientList extends React.Component {
  render() {
    const { loading, errorMsg, clients } = this.props;
    return (
      <div className="clients__content">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Mobile</Table.HeaderCell>
              <Table.HeaderCell />
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          {loading ? (
            <div>...loading</div>
          ) : errorMsg ? (
            <div>{errorMsg}</div>
          ) : clients.length > 0 ? (
            clients.map(({ id, name, mobile }) => (
              <Table.Body>
                <ClientItem key={id} id={id} name={name} mobile={mobile} />
              </Table.Body>
            ))
          ) : (
            <div>등록된 회원이 없습니다.</div>
          )}
        </Table>
      </div>
    );
  }
}
