import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p className="clock">{this.state.time.toLocaleTimeString("nl-BE")}</p>
    );
  }
}

export default Clock;
