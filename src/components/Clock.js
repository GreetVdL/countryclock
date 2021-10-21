import React from "react";
import { utcToZonedTime } from "date-fns-tz";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.countryIds = {
      belgium: "Europe/Brussels",
      iceland: "Europe/Reykjavik",
      portugal: "Europe/Lisbon",
    };
  }
  tick = (countryId) => {
    this.props.updateStateTime();
  };

  getLocalTime() {
    return utcToZonedTime(
      this.props.state.time,
      this.countryIds[this.props.state.country]
    ).toLocaleTimeString();
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
    return <p className="clock">{this.getLocalTime()}</p>;
  }
}

export default Clock;
