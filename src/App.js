import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import JoinForm from "./components/JoinForm";
export default class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <JoinForm />
      </div>
    );
  }
}
