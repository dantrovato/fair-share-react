import React, { Component } from "react";

class PropertyValue extends Component {
  render() {
    return (
      <form className="m-3">
        <div className="form-group m-auto text-center justify-content-center">
          <label
            htmlFor="propertyValue"
            className="text-info"
            id="propertyValueLabel"
          >
            {this.props.propertyValueMessage}
          </label>
          <input
            autoFocus
            type="number"
            min="1"
            className="form-control text-info text-center mt-3"
            id="propertyValue"
            placeholder="$"
            onBlur={this.props.onClick}
          />
          <button
            onClick={this.props.onClick}
            type="submit"
            className="btn btn-primary d-none"
          >
            Enter
          </button>
        </div>
      </form>
    );
  }
}

export default PropertyValue;
