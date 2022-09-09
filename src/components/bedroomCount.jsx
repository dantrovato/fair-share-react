import React, { Component } from "react";

class BedroomCount extends Component {
  render() {
    return (
      <form className="row g-3 justify-content-center">
        <label
          htmlFor="bedroomCount"
          className="col-sm-6 col-form-label text-center"
        >
          Enter the number of bedrooms
        </label>
        <div className="col-2">
          <input
            type="number"
            min="2"
            className="form-control"
            id="bedroomCount"
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

export default BedroomCount;
