import React, { Component } from "react";

const ResultMessage = ({
  propertyValue,
  commonAreasValue,
  bedroomCount,
  dimentions,
  roommates,
}) => {
  // display complete result if all fields are filled
  if (
    propertyValue > 0 &&
    commonAreasValue > 0 &&
    bedroomCount > 0 &&
    dimentions.length &&
    Number(bedroomCount) === dimentions.length &&
    dimentions.length === roommates.length
  ) {
    console.log("bedroom count: ", bedroomCount);
    console.log("dimentions length: ", dimentions.length);
    return <p className="text-center">Complete</p>;
  }

  // if no value for the cost of the property is set don't display a result message
  if (propertyValue <= 0) {
    return;
  }

  if (propertyValue > 0 && commonAreasValue <= 0) {
    return (
      <p className="text-center">
        There rent for the entire property is {propertyValue}
      </p>
    );
  }

  if (commonAreasValue > 0 && bedroomCount <= 0) {
    return (
      <React.Fragment>
        <p className="text-center">
          There rent for the entire property is {propertyValue}
        </p>
        <p className="text-center">
          The value of the common areas is roughly {commonAreasValue}%
        </p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <p className="text-center">
        There rent for the entire property is {propertyValue}
      </p>
      <p className="text-center">
        The value of the common areas is roughly {commonAreasValue}%
      </p>
      <p className="text-center">
        There are {bedroomCount} bedrooms in the property
      </p>
    </React.Fragment>
  );
};

export default ResultMessage;
