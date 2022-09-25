import React, { Component } from "react";

class CommonAreas extends Component {
  // NOT SURE WHY THIS ISN'T WORKING
  // componentDidMount() {
  //   console.log("CommonAreas - componentDidMount");
  //   document.querySelector("#commonAreasValue").focus();
  // }

  render() {
    const { propertyValue, onClick } = this.props;
    console.log("CommonAreas - Render");
    let display;
    if (propertyValue <= 0) {
      return;
    }

    return (
      <form className={`row g-3 justify-content-center mb-3 ${display}`}>
        <label
          htmlFor="commonAreasValue"
          className="col-sm-6 col-form-label text-info"
        >
          Enter value of common areas
        </label>
        <div className="col-2">
          <input
            autoFocus
            type="number"
            min="2"
            className="form-control text-info"
            id="commonAreasValue"
            placeholder=""
            onBlur={onClick}
          />
        </div>
        {
          // this div isn't displayed but I keep it because otherwise the
          // enter button doesn't work
        }
        <div className="col-auto d-none">
          <button
            onClick={onClick}
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
