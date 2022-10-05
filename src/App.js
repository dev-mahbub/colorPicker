import React, { Component } from "react";
import "./App.css";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  lime,
  orange,
} from "@mui/material/colors";
import Colors from "./Colors";

export default class App extends Component {
  state = {
    colors: [
      red[200],
      red[500],
      red[900],
      pink[200],
      pink[500],
      pink[900],
      purple[200],
      purple[500],
      purple[900],
      deepPurple[200],
      deepPurple[500],
      deepPurple[900],
      indigo[200],
      indigo[500],
      indigo[900],
      blue[200],
      blue[500],
      blue[900],
      cyan[200],
      cyan[500],
      cyan[900],
      teal[200],
      teal[500],
      teal[900],
      lime[200],
      lime[500],
      lime[900],
      orange[200],
      orange[500],
      orange[900],
    ],
  };

  render() {
    return (
      <div className="App">
        <Colors colorName={this.state.colors} />
      </div>
    );
  }
}
