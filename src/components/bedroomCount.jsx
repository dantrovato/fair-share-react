import React from "react";

const BedroomCount = ({
  commonAreasPercentage,
  onClick,
  bedroomCountMessage,
}) => {
  if (commonAreasPercentage === undefined) {
    return;
  }

  // <form>
  //   <div className="form-group">
  //     <label
  //       htmlFor="commonAreasValue"
  //       className="text-info"
  //       id="commonAreasLabel"
  //     >
  //       {commonAreasMessage}
  //     </label>
  //     <input
  //       autoFocus
  //       type="number"
  //       min="0"
  //       className="form-control text-info"
  //       id="commonAreasValue"
  //       placeholder="%"
  //       onBlur={onBlur}
  //     />
  //     <button
  //       onClick={onClick}
  //       // onBlur={onBlur}
  //       type="submit"
  //       className="btn btn-primary d-none"
  //     >
  //       Enter
  //     </button>
  //   </div>
  // </form>;

  return (
    <form className="m-3">
      <div className="form-group m-auto">
        <label
          htmlFor="bedroomCount"
          className="text-info"
          id="bedroomCountLabel"
        >
          {bedroomCountMessage}
        </label>
        <div className="submitDiv">
          <input
            autoFocus
            type="number"
            // min="1"
            className="form-control text-info mt-3"
            id="bedroomCount"
            placeholder=""
            // onBlur={onClick}
          />
          <button
            onClick={onClick}
            type="submit"
            className="btn btn-danger m-2"
          >
            Enter
          </button>
        </div>
      </div>
    </form>
  );
};

export default BedroomCount;
