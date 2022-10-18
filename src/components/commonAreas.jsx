import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";

class CommonAreas extends Component {
  render() {
    const { propertyValue, onClick, commonAreasMessage } = this.props;
    if (propertyValue <= 0) {
      return;
    }

    return (
      <form className="m-3">
        <div className="form-group m-auto">
          <div className="labelQuestion">
            <label
              htmlFor="commonAreasValue"
              className="text-info"
              id="commonAreasLabel"
            >
              {commonAreasMessage}
            </label>
            {/* <FontAwesomeIcon icon={faQuestion} className="font" /> */}
          </div>
          <div className="submitDiv">
            <input
              autoFocus
              type="number"
              min="0"
              className="form-control text-info mt-3"
              id="commonAreasValue"
              placeholder="%"
              // onBlur={onBlur}
            />
            <button
              onClick={onClick}
              // onBlur={onBlur}
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

export default CommonAreas;
