import React from "react";

const BedroomCount = ({
  commonAreasPercentage,
  onClick,
  bedroomCountMessage,
}) => {
  if (commonAreasPercentage === undefined) {
    return;
  }

  return (
    <form className="row g-3 justify-content-around mb-3">
      <label
        htmlFor="bedroomCount"
        className="col-3 col-form-label text-info"
        id="bedroomCountLabel"
      >
        {bedroomCountMessage}
      </label>
      <div className="col-auto">
        <input
          autoFocus
          type="number"
          // min="1"
          className="form-control text-info"
          id="bedroomCount"
          placeholder=""
          onBlur={onClick}
        />
      </div>
      <div className="col-auto d-none">
        <button onClick={onClick} type="submit" className="btn btn-primary">
          Enter
        </button>
      </div>
    </form>
  );
};

export default BedroomCount;
