import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    const { activeItem } = this.props;
    return (
      <div>
        <Menu tabular>
          <Link to="/calendar">
            <Menu.Item
              name="calendar"
              active={activeItem === "calendar"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/clients">
            <Menu.Item
              name="clients"
              active={activeItem === "clients"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}
