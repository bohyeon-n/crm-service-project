import React from "react";
import { Grid, Modal, Button, Menu } from "semantic-ui-react";

import AddClientForm from "./AddClientForm";
export default class AddClient extends React.Component {
  state = {
    open: false,
    activeItem: "Info",
    client: {
      memo: "",
      memos: [],
      name: "",
      mobile: "",
      status: "active",
      goal: "",
      injuries: "",
      condition: "",
      trainer: "",
      trainingCount: 10
    }
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
  render() {
    const {
      open,
      closeOnEscape,
      closeOnDimmerClick,
      activeItem,
      client
    } = this.state;
    const { onAddClient, trainers } = this.props;

    return (
      <Modal
        size="large"
        open={open}
        trigger={
          <Button onClick={e => this.setState({ open: true })}>
            ADD CLIENT
          </Button>
        }
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
                trainers={trainers}
                memos={client.memos}
                activeItem={activeItem}
                handleClientUpdate={this.onUpdateClient}
                trainingCount={this.state.trainingCount}
              />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close} negative>
            close
          </Button>
          <Button onClick={this.handleSubmit} positive labelPosition="right">
            Add Client
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
