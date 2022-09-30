import React, { Component } from "react";

class PropertyValue extends Component {
  render() {
    return (
      <form className="row g-3 justify-content-around mb-3 background">
        <label
          htmlFor="propertyValue"
          className="col-3 col-form-label text-info"
          id="propertyValueLabel"
        >
          {this.props.propertyValueMessage}
        </label>
        <div className="col-auto">
          <input
            autoFocus
            type="number"
            min="1"
            className="form-control text-info"
            id="propertyValue"
            placeholder="$"
            onBlur={this.props.onClick}
          />
        </div>
        {
          // this div isn't displayed but I keep it because otherwise the
          // enter button doesn't work
        }
        <div className="col-auto d-none">
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
