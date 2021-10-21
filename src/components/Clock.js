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
    // console.log(this.props.state.time);
    this.props.updateStateTime();
    // console.log(this.props);
    // console.log(this.props.state);
    // console.log("tick active");
  };

  countryTime(countryId) {
    // console.log(this.countryIds[this.props.state.country]);
    // console.log(this.props.state.time.toLocaleTimeString(countryId));
    return this.props.state.time.toLocaleTimeString(countryId);
  }

  getLocalTime() {
    console.log(this.countryIds[this.props.state.country]);
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

  //   componentWillUpdate() {
  //     console.log("state has changed");
  //   }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p className="clock">
        {/* {this.countryTime(this.countryIds[this.props.state.country])} */}
        {/* {utcToZonedTime(
          this.props.state.time,
          this.countryIds[this.props.state.country]
        )} */}
        {this.getLocalTime()}
      </p>
    );
  }
}

export default Clock;
