import React from "react";

class Country extends React.Component {
  handleChange = (event) => {
    this.props.updateStateCountry(event.target.value);
  };

  render() {
    return (
      <select className="country" onChange={this.handleChange}>
        country
        <option value="belgium">BELGIUM</option>
        <option value="iceland">ICELAND</option>
        <option value="portugal">PORTUGAL</option>
      </select>
    );
  }
}

export default Country;
