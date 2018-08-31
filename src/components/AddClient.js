import React from "react";
import { Grid, Modal, Button, Menu } from "semantic-ui-react";

import AddClientForm from "./AddClientForm";
export default class AddClient extends React.Component {
  state = {
    open: true,
    update: false,
    activeItem: "Info",
    client: {
      memo: "",
      memos: [],
      name: "",
      mobile: "",
      status: "",
      goal: "",
      injuries: "",
      condition: "",
      trainer: "",
      count: null
    }
  };

  autoHypenPhone = str => {
    str = str.replace(/[^0-9]/g, "");
    const length = str.length;
    if (length < 4) {
      return str;
    } else if (length < 7) {
      return str.substr(0, 3) + "-" + str.substr(3);
    } else if (length < 11) {
      return str.substr(0, 3) + "-" + str.substr(3, 3) + "-" + str.substr(6);
    } else {
      return str.substr(0, 3) + "-" + str.substr(3, 4) + "-" + str.substr(7);
    }
    return str;
  };

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };
  close = e => this.setState({ open: false });
  handleSubmit = async e => {
    if (!this.state.client.trainer) {
      await this.setState({
        client: {
          ...this.state.client,
          trainer: this.props.trainers[0].name
        }
      });
    }
    if (!this.state.client.name || !this.state.client.mobile) {
      alert("필수 항목을 확인해주세요");
      if (this.state.activeItem !== "Info") {
        this.setState({
          activeItem: "Info"
        });
      }
    } else {
      this.props.onAddClient(this.state.client);
      this.close();
    }
  };
  onUpdateClient = (name, value) => {
    if (name === "mobile") {
      value = this.autoHypenPhone(value);
    }
    this.setState({
      client: {
        ...this.state.client,

        [name]: value
      }
    });
  };
  componentDidMount() {
    this.props.onMount && this.props.onMount();
  }
  updateState = async client => {
    await this.setState({
      client: client,
      update: true
    });
  };
  render() {
    const {
      open,
      closeOnEscape,
      closeOnDimmerClick,
      activeItem,
      client
    } = this.state;
    const { onAddClient, trainers } = this.props;
    const clickedClient = this.props.client;
    if (clickedClient && !this.state.update) {
      this.updateState(clickedClient);
    }
    console.log(this.props.clickedClient);
    console.log(this.props.edit);
    return (
      <Modal
        size="large"
        open={open}
        // trigger={
        //   <Button onClick={e => this.setState({ open: true })}>
        //     {this.props.edit ? "EDIT CLIENT" : "ADD CLIENT"}
        //   </Button>
        // }
      >
        <Modal.Header>ADD CLIENT</Modal.Header>
        <Modal.Content style={{ height: "80vh" }} scrolling>
          <Grid>
            <Grid.Column width={4}>
              <Menu pointing vertical fluid>
                <Menu.Item
                  name="Info"
                  active={activeItem === "Info"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Assessments"
                  active={activeItem === "Assessments"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Notes"
                  active={activeItem === "Notes"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
              <AddClientForm
                client={this.state.client}
                trainers={trainers}
                memos={client.memos}
                activeItem={activeItem}
                handleClientUpdate={this.onUpdateClient}
                count={this.state.count}
                clickedClient={clickedClient}
              />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={e => {
              this.close();
              this.props.handleClick();
            }}
            negative
          >
            close
          </Button>
          {this.props.edit ? (
            <Button
              labelPosition="right"
              onClick={e => {
                this.props.handleClick();
              }}
            >
              EDIT CLIENT
            </Button>
          ) : (
            <Button
              onClick={e => {
                this.handleSubmit();
                this.props.handleClick();
              }}
              labelPosition="right"
            >
              ADD CLIENT
            </Button>
          )}
        </Modal.Actions>
      </Modal>
    );
  }
}
