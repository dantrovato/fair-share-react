import React, { Component } from "react";

class PropertyValue extends Component {
  // constructor() {
  //   super();
  //   console.log("PropertyValue - Constructor");
  //   // document.querySelector("#propertyValue").focus();
  // }
  // componentDidMount() {
  //   document.querySelector("#propertyValue").focus();
  // }

  render() {
    return (
      <form className="row g-3 justify-content-center mb-3 background">
        <label
          htmlFor="propertyValue"
          className="col-sm-6 col-form-label text-info"
        >
          Enter the cost of the entire property
        </label>
        <div className="col-2">
          <input
            autoFocus
            type="number"
            min="1"
            className="form-control text-info"
            id="propertyValue"
            placeholder=""
            onBlur={this.props.onClick}
            ref={(x) => (this.propertyValue = x)}
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
