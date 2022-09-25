import React from "react";
import _ from "lodash";

const BedroomsInfo = ({ bedroomCount, handleRoomSize, handleRoommates }) => {
  if (bedroomCount < 2) {
    return;
  }

  const bedroomsKeys = _.range(1, Number(bedroomCount) + 1);
  const addFocusToNextInput = (event) => {
    event.target
      .closest("form")
      .nextElementSibling.querySelector("input")
      .focus();
  };

  return bedroomsKeys.map((roomKey) => (
    <React.Fragment>
      <form
        className="row g-3 justify-content-center mb-3"
        key={"bedroomsForm" + roomKey}
      >
        <label
          key={"roomsLabel" + roomKey}
          htmlFor={"bedroomSize" + roomKey}
          className="col-sm-6 col-form-label text-info"
        >
          Enter the size of room {roomKey} in sq metres or feet
        </label>

        <div className="col-2">
          {roomKey === 1 ? (
            <input
              autoFocus
              type="number"
              key={"roomsInput" + roomKey}
              className="form-control text-info"
              id={"bedroomSize" + roomKey}
              placeholder=""
              onBlur={(event) => {
                handleRoomSize(event, "bedroomSize" + roomKey);
                addFocusToNextInput(event);
              }}
            />
          ) : (
            <input
              type="number"
              key={"roomsInput" + roomKey}
              className="form-control text-info"
              id={"bedroomSize" + roomKey}
              placeholder=""
              onBlur={(event) => {
                handleRoomSize(event, "bedroomSize" + roomKey);
              }}
            />
          )}
        </div>

        <div className="col-auto">
          <button
            key={"roomsButton" + roomKey}
            onClick={(event) => {
              handleRoomSize(event, "bedroomSize" + roomKey);
              addFocusToNextInput(event);
            }}
            type="submit"
            className="btn btn-primary d-none"
          >
            Enter
          </button>
        </div>
      </form>
      <form
        className="row g-3 justify-content-center mb-3"
        key={"roomatesForm" + roomKey}
      >
        <label
          key={"roommatesLabel" + roomKey}
          htmlFor={"roomMatesNumber" + roomKey}
          className="col-sm-6 col-form-label text-info"
        >
          How many people will be in room {roomKey}?
        </label>

        <div className="col-2">
          <input
            type="number"
            key={"roommatesInput" + roomKey}
            className="form-control text-info"
            id={"roomMatesNumber" + roomKey}
            placeholder=""
            onBlur={(event) => {
              handleRoommates(event, "roomMatesNumber" + roomKey);
              addFocusToNextInput(event);
            }}
          />
        </div>

        <div className="col-auto">
          <button
            key={"roommatesButton" + roomKey}
            onClick={(event) => {
              handleRoommates(event, "roomMatesNumber" + roomKey);
              addFocusToNextInput(event);
            }}
            type="submit"
            className="btn btn-primary d-none"
          >
            Enter
          </button>
        </div>
      </form>
    </React.Fragment>
  ));
};

export default BedroomsInfo;
