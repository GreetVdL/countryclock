import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Clock from "./components/Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), country: "belgium" };
    this.updateStateTime = this.updateStateTime.bind(this);
    this.updateStateCountry = this.updateStateCountry.bind(this);
  }

  updateStateTime() {
    this.setState((prevState) => ({
      time: new Date(),
    }));
  }

  updateStateCountry(country) {
    this.setState((prevState) => ({
      country,
    }));
  }

  render() {
    return (
      <>
        <Header
          state={this.state}
          updateStateCountry={this.updateStateCountry}
        />
        <Clock state={this.state} updateStateTime={this.updateStateTime} />
      </>
    );
  }
}

export default App;
