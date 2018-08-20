import React from "react";
import ClientItem from "../components/ClientItem";
import { Segment, Table, Menu, Button, Search } from "semantic-ui-react";
import ClientList from "./ClientList";
import AddClientContainer from "../containers/AddClientContainer";

export default class Client extends React.Component {
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
  state = {
    activeItem: "active",
    isLoading: false,
    value: "",

    clients: []
  };
  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleSearchChange = async (e, { value }) => {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 300);
    await this.setState({
      isLoading: true,
      value
    });
    this.updateClients();
  };
  sortClients = (clients = [], activeItem, value) => {
    let sortedClients = [];

    activeItem === "active"
      ? clients.map(client => {
          if (client.status === "active") {
            sortedClients.push(client);
          }
        })
      : clients.map(client => {
          if (client.status === "former") {
            sortedClients.push(client);
          }
        });
    if (value) {
      value = value.replace(/(\s*)/g, "");
      const searchClients = [];
      sortedClients.map(client => {
        if (client.name.indexOf(value) >= 0) {
          searchClients.push(client);
        }
      });
      sortedClients = searchClients;
    }
    return sortedClients;
  };
  updateClients = () => {
    const { clients } = this.props;
    const { activeItem, value } = this.state;

    const sortedClients = this.sortClients(clients, activeItem, value);
    this.setState({
      clients: sortedClients
    });
  };
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  handleItemClick = async (e, { name }) => {
    await this.setState({
      activeItem: name
    });
    this.updateClients();
  };
  render() {
    const { activeItem, value, isLoading } = this.state;
    const { errorMsg, loading, addClient } = this.props;
    let clients = this.state.clients;
    if (this.state.clients == false && value == "") {
      clients = this.sortClients(this.props.clients, activeItem);
    }
    return (
      <React.Fragment>
        <div className="clients__title">
          <Segment>CLIENT MANAGEMENT</Segment>
        </div>
        <div className="clients__tab">
          <div className="clients__tab-header" />
          <Menu pointing>
            <Menu>
              <Menu.Item
                name="active"
                active={activeItem === "active"}
                onClick={this.handleItemClick}
              >
                Active Clients
              </Menu.Item>
              <Menu.Item
                name="former"
                active={activeItem === "former"}
                onClick={this.handleItemClick}
              >
                Former Clients
              </Menu.Item>
              <Search
                loading={isLoading}
                onSearchChange={this.handleSearchChange}
                value={value}
                showNoResults={false}
              />
              <AddClientContainer />
            </Menu>
          </Menu>
        </div>
        <ClientList clients={clients} errorMsg={errorMsg} loading={loading} />
      </React.Fragment>
    );
  }
}
