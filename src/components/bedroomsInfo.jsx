import React from "react";
import _ from "lodash";

const BedroomsInfo = ({ bedroomCount, handleRoomSize, handleRoommates }) => {
  if (bedroomCount < 2) {
    return;
  }

  const bedroomsKeys = _.range(1, Number(bedroomCount) + 1);

  // const handleRoomSize = (event, id) => {
  //   event.preventDefault();
  //   const dimentions = Number(document.getElementById(id).value);
  //   // console.log(dimentions);
  // };

  // const handleRoommates = (event, id) => {
  //   event.preventDefault();
  //   const roommates = Number(document.getElementById(id).value);
  //   // console.log(roommates);
  // };

  return bedroomsKeys.map((roomKey) => (
    <form className="row g-3 justify-content-center mb-3" key={roomKey}>
      <label
        htmlFor={"bedroomSize" + roomKey}
        className="col-sm-6 col-form-label"
      >
        Enter the size of room {roomKey} in sq metres or feet
      </label>

      <div className="col-2">
        <input
          type="number"
          min="3"
          className="form-control"
          id={"bedroomSize" + roomKey}
          placeholder=""
        />
      </div>

      <div className="col-auto">
        <button
          onClick={(event) => {
            // console.log("bedroomSize" + roomKey);
            handleRoomSize(event, "bedroomSize" + roomKey);
          }}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Enter
        </button>
      </div>
      <label
        htmlFor={"roomMatesNumber" + roomKey}
        className="col-sm-6 col-form-label"
      >
        How many people will be in room {roomKey}?
      </label>

      <div className="col-2">
        <input
          type="number"
          min="1"
          className="form-control"
          id={"roomMatesNumber" + roomKey}
          placeholder=""
        />
      </div>

      <div className="col-auto">
        <button
          onClick={(event) =>
            handleRoommates(event, "roomMatesNumber" + roomKey)
          }
          type="submit"
          className="btn btn-primary mb-3"
        >
          Enter
        </button>
      </div>
    </form>
  ));
};

export default BedroomsInfo;
