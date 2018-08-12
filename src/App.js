import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import ClientPage from "./pages/ClientPage";
import { Provider } from "react-redux";
import { store } from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/clients" component={ClientPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
