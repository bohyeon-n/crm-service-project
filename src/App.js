import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import ClientPage from "./pages/ClientPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import { Provider } from "react-redux";
import { store } from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/clients" component={ClientPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/join" component={JoinPage} />
            <Route path="/calendar" component={CalendarPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
