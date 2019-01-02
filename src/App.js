import React, { Component } from "react";

import NavBar from "./Views/Layout/NavBar/NavBar";
import Main from "./Views/Layout/Main/Main";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="s-layout">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
