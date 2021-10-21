import React from "react";

class Country extends React.Component {
  render() {
    return (
      <select className="country">
        country
        <option value="belgium">BELGIUM</option>
        <option value="italy">ITALY</option>
        <option value="brazil">BRAZIL</option>
        <option value="iceland">ICELAND</option>
      </select>
    );
  }
}

export default Country;
