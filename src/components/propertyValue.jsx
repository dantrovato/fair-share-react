import React, { Component } from "react";

class PropertyValue extends Component {
  render() {
    return (
      <form className="m-3">
        <div className="form-group m-auto">
          <label
            htmlFor="propertyValue"
            className="text-info"
            id="propertyValueLabel"
          >
            {this.props.propertyValueMessage}
          </label>
          <div className="submitDiv">
            <input
              autoFocus
              type="number"
              min="1"
              className="form-control text-info mt-3"
              id="propertyValue"
              placeholder="$"
              // onBlur={this.props.onClick}
            />
            <button
              onClick={this.props.onClick}
              type="submit"
              className="btn btn-danger m-2"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default PropertyValue;
