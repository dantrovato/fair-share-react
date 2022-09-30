import React, { Component } from "react";

class CommonAreas extends Component {
  render() {
    const { propertyValue, onClick, onBlur, commonAreasMessage } = this.props;
    let display;
    if (propertyValue <= 0) {
      return;
    }

    return (
      <form className="m-3">
        <div className="form-group m-auto text-center justify-content-center">
          <label
            htmlFor="commonAreasValue"
            className="text-info"
            id="commonAreasLabel"
          >
            {commonAreasMessage}
          </label>
          <input
            autoFocus
            type="number"
            min="0"
            className="form-control text-info text-center mt-3"
            id="commonAreasValue"
            placeholder="%"
            onBlur={onBlur}
          />
          <button
            onClick={onClick}
            // onBlur={onBlur}
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

export default CommonAreas;
