import React, { Component } from "react";
import _ from "lodash";

// separate common areas from rooms
// divide common areas by number of flatmates
// map dimentions into array of percentages of the rooms total

let ResultMessage = ({
  // Update any code that uses the items in dimentions and to use the items.value

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

    return (
      <React.Fragment>
        <h1 className="text-center text-success">Results</h1>
        {costOfEachRoomArray.map((roomCost, index) => (
          <p className="text-center text-light bg-dark" key={index + 1}>
            Room {index + 1} has {roommates[index]} roommate
            {roommates[index] === 1 ? "" : "s"}. It costs{" "}
            {(roomCost / roommates[index] + commonAreaPriceForEach).toFixed(2)}{" "}
            each.
          </p>
        ))}
        <h2 className="text-center text-success">The breakdown</h2>

        <p className="text-center text-light bg-dark">
          The value of common area is {commonAreaValue}
        </p>

        <p className="text-center text-light bg-dark">
          The value of all the rooms combined is {bedroomsValue.toFixed(2)}
        </p>

        <p className="text-center text-light bg-dark">
          Each flatmate pays {commonAreaPriceForEach.toFixed(2)} for an equal
          share of the common areas
        </p>

        {costOfEachRoomArray.map((roomCost, index) => (
          <p className="text-center text-light bg-dark" key={index + 1}>
            Room {index + 1} costs {roomCost.toFixed(2)}. It has{" "}
            {roommates[index]} roommate
            {roommates[index] === 1 ? "" : "s"} paying{" "}
            {(roomCost / roommates[index]).toFixed(2)} each
          </p>
        ))}
      </React.Fragment>
    );
  }

  // if no value for the cost of the property is set don't display a result message
  // if (propertyValue <= 0) {
  //   return;
  // }

  // if (propertyValue > 0 && commonAreasPercentage <= 0) {
  //   return (
  //     <p className="text-center">
  //       There rent for the entire property is {propertyValue}
  //     </p>
  //   );
  // }

  // if (commonAreasPercentage > 0 && bedroomCount <= 0) {
  //   return (
  //     <React.Fragment>
  //       <p className="text-center">
  //         There rent for the entire property is {propertyValue}
  //       </p>
  //       <p className="text-center">
  //         The value of the common areas is {commonAreasPercentage}% (
  //         {commonAreaValue})
  //       </p>
  //     </React.Fragment>
  //   );
  // }

  // return (
  //   <React.Fragment>
  //     <p className="text-center">
  //       There rent for the entire property is {propertyValue}
  //     </p>
  //     <p className="text-center">
  //       The value of the common areas is {commonAreasPercentage}% (
  //       {commonAreaValue})
  //     </p>
  //     <p className="text-center">
  //       There are {bedroomCount} bedrooms in the property
  //     </p>
  //   </React.Fragment>
  // );
};

export default ResultMessage;
