import React, { Component } from "react";

class CommonAreas extends Component {
  render() {
    const { propertyValue, onClick, onBlur, commonAreasMessage } = this.props;
    let display;
    if (propertyValue <= 0) {
      return;
    }

    return (
      <form className={`row g-3 justify-content-center mb-3 ${display}`}>
        <label
          htmlFor="commonAreasValue"
          className="col-sm-6 col-form-label text-info"
          id="commonAreasLabel"
        >
          {commonAreasMessage}
        </label>
        <div className="col-2">
          <input
            autoFocus
            type="number"
            min="0"
            className="form-control text-info"
            id="commonAreasValue"
            placeholder="%"
            onBlur={onBlur}
          />
        </div>
        {
          // this div isn't displayed but I keep it because otherwise the
          // enter button doesn't work
        }
        <div className="col-auto d-none">
          <button
            onClick={onClick}
            // onBlur={onBlur}
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

export default CommonAreas;
