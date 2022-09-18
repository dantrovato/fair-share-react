import React, { Component } from "react";

class PropertyValue extends Component {
  render() {
    return (
      <form className="row g-3 justify-content-center mb-3">
        <label htmlFor="propertyValue" className="col-sm-6 col-form-label">
          Enter the cost of the entire property
        </label>
        <div className="col-2">
          <input
            type="number"
            min="1"
            className="form-control"
            id="propertyValue"
            placeholder=""
          />
        </div>
        <div className="col-auto">
          <button
            onClick={this.props.onClick}
            type="submit"
            className="btn btn-primary mb-3"
          >
            Enter
          </button>
        </div>
      </form>
    );
  }
}

export default PropertyValue;
