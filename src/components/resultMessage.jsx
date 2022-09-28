import React, { Component } from "react";
import _ from "lodash";

let ResultMessage = ({
  propertyValue,
  commonAreasPercentage,
  bedroomCount,
  dimentions,
  roommates,
}) => {
  const commonAreaValue = (commonAreasPercentage * propertyValue) / 100;
  dimentions = [...new Set(dimentions)];
  roommates = [...new Set(roommates)];
  // display complete result if all fields are filled
  if (
    propertyValue > 0 &&
    commonAreasPercentage > 0 &&
    bedroomCount > 0 &&
    dimentions.length &&
    bedroomCount === dimentions.length &&
    dimentions.length === roommates.length
  ) {
    dimentions = dimentions.map((d) => Number(d.value));
    roommates = roommates.map((r) => Number(r.value));
    const commonAreaPriceForEach = commonAreaValue / _.sum(roommates);
    const bedroomsValue = propertyValue - commonAreaValue;
    const totalArea = _.sum(dimentions);

    const costOfEachRoomArray = dimentions.map((size) => {
      return (size * bedroomsValue) / totalArea;
    });

    function highlightFirstInvalid(array) {
      // array.forEach((num, index) => {
      //   if (num <= 0) {
      //     console.log(array[index]);
      //   }
      // });

      [...document.querySelectorAll("input")]
        .filter((input) => !input.value)
        .forEach((input) => {
          input.classList.add("border");
          input.classList.add("border-danger");
          input.focus();
        });
    }

    if (_.some(dimentions, (num) => num <= 0)) {
      highlightFirstInvalid(dimentions);
    } else if (_.some(roommates, (num) => num <= 0)) {
      highlightFirstInvalid(roommates);
    }

    return (
      <React.Fragment>
        <div className="col-md-5 mx-auto mt-5 bg-info" id="header">
          <h1 className="display-4 fw-normal text-center">Results</h1>

          {costOfEachRoomArray.map((roomCost, index) => (
            <p
              className="text-center text-light bg-info p-2 m-0"
              key={index + 1}
            >
              Room {index + 1} has {roommates[index]} roommate
              {roommates[index] === 1 ? "" : "s"}. It costs{" "}
              {(roomCost / roommates[index] + commonAreaPriceForEach).toFixed(
                2
              )}{" "}
              each.
            </p>
          ))}
        </div>
        <div className="col-md-5 mx-auto" id="header">
          <h1 className="text-center text-info m-5">The breakdown</h1>

          <p className="text-center text-info p-2 m-0">
            The value of common area is {commonAreaValue}
          </p>

          <p className="text-center text-info p-2 m-0">
            The value of all the rooms combined is {bedroomsValue.toFixed(2)}
          </p>

          <p className="text-center text-info p-2 m-0">
            Each flatmate pays {commonAreaPriceForEach.toFixed(2)} for an equal
            share of the common areas
          </p>

          {costOfEachRoomArray.map((roomCost, index) => (
            <p className="text-center text-info p-2 m-0" key={index + 1}>
              Room {index + 1} costs {roomCost.toFixed(2)}. It has{" "}
              {roommates[index]} roommate
              {roommates[index] === 1 ? "" : "s"} paying{" "}
              {(roomCost / roommates[index]).toFixed(2)} each
            </p>
          ))}
        </div>
      </React.Fragment>
    );
  }
};

export default ResultMessage;
