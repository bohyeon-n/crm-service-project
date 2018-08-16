import React from "react";
import { Grid, Modal, Button, Menu } from "semantic-ui-react";
import ClientInfoForm from "./ClientInfoForm";
import ClientAssessmentsForm from "./ClientAssessmentsForm";
import ClientNoteForm from "./ClientNoteForm";

export default class AddClient extends React.Component {
  state = {
    open: false,
    activeItem: "Info"
  };
  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };
  close = e => this.setState({ open: false });
  render() {
    const { open, closeOnEscape, closeOnDimmerClick, activeItem } = this.state;

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
        <Modal.Content style={{ height: "80vh" }}>
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
              {activeItem === "Info" ? (
                <ClientInfoForm />
              ) : activeItem === "Assessments" ? (
                <ClientAssessmentsForm />
              ) : (
                <ClientNoteForm />
              )}
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close} negative>
            close
          </Button>
          <Button
            onClick={this.close}
            positive
            labelPosition="right"
            icon="checkmark"
            content="Yes"
          >
            Add Client
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
