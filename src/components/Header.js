import React from "react";
import Country from "./Country";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>The time in&nbsp;</h1>
        <Country />
        <h1>&nbsp;is</h1>
      </div>
    );
  }
}

export default Header;
