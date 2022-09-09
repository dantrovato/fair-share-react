import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header";
import BedroomCount from "./components/bedroomCount";
import ResultMessage from "./components/resultMessage";

class App extends Component {
  state = {
    bedroomCount: 0,
  };

  handleBedroomCount = () => {
    const bedroomCount = document.querySelector("#bedroomCount").value;
    if (bedroomCount < 2) {
      return;
    }
    this.setState({ bedroomCount });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <BedroomCount onClick={this.handleBedroomCount} />
        <ResultMessage bedroomCount={this.state.bedroomCount} />
      </React.Fragment>
    );
  }
}

export default App;
