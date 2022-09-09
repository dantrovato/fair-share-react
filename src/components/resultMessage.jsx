import React, { Component } from "react";

class ResultMessage extends Component {
  render() {
    const { bedroomCount } = this.props;
    if (bedroomCount < 2) {
      return;
    }

    return (
      <p className="text-center">
        There are {this.props.bedroomCount} bedrooms in the property
      </p>
    );
  }
}

export default ResultMessage;
