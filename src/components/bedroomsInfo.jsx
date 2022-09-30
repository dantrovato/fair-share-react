import React from "react";
import _ from "lodash";

const BedroomsInfo = ({
  bedroomCount,
  handleRoomSize,
  handleRoommates,
  bedroomSizeMessage,
  roommatesMessage,
}) => {
  if (bedroomCount < 1) {
    return;
  }

  const bedroomsKeys = _.range(1, Number(bedroomCount) + 1);
  // const validate = (event) => {
  //   const value = Number(event.target.value);
  //   return value > 0 && Number.isInteger(value);
  // };

  // const addFocusToNextInputOnBlur = (event) => {
  //   // const input = document.getElementById(id);
  //   if (!validate(event)) {
  //     const label = event.target.parentElement.previousElementSibling;
  //     label.textContent = "Enter whole number that's greater than 0";
  //     return;
  //   }

  //   if (
  //     event.target.closest("form").nextElementSibling.querySelector("input")
  //   ) {
  //     event.target
  //       .closest("form")
  //       .nextElementSibling.querySelector("input")
  //       .focus();
  //   }
  // };

  return bedroomsKeys.map((roomKey) => (
    <React.Fragment>
      <form
        className="row g-3 justify-content-around mb-3"
        key={"bedroomsForm"}
      >
        <label
          key={"roomsLabel" + roomKey}
          id={"roomsLabel" + roomKey}
          htmlFor={"bedroomSize" + roomKey}
          className="col-3 col-form-label text-info"
        >
          {/* {bedroomSizeMessage ||
            `Enter the size of room ${roomKey} in sq metres or feet`} */}
          Enter the size of room {roomKey} in sq metres or feet
        </label>

        <div className="col-auto" key={"roomsDiv" + roomKey}>
          {/* {set autoFocus only on the first input} */}
          {roomKey === 1 ? (
            <input
              autoFocus
              type="number"
              key={"roomsInput" + roomKey}
              className="form-control text-info col-auto"
              id={"bedroomSize" + roomKey}
              placeholder=""
              onBlur={(event, id) => {
                handleRoomSize(
                  event,
                  "bedroomSize" + roomKey,
                  "roomsLabel" + roomKey,
                  roomKey
                );
                // addFocusToNextInputOnBlur(event, id);
              }}
            />
          ) : (
            <input
              type="number"
              key={"roomsInput" + roomKey}
              className="form-control text-info col-auto"
              id={"bedroomSize" + roomKey}
              placeholder=""
              onBlur={(event, id) => {
                handleRoomSize(
                  event,
                  "bedroomSize" + roomKey,
                  "roomsLabel" + roomKey,
                  roomKey
                );
                // addFocusToNextInputOnBlur(event, id);
              }}
            />
          )}
        </div>

        <div className="col-auto d-none" key={"roomsButtonDiv" + roomKey}>
          <button
            key={"roomsButton" + roomKey}
            onClick={(event) => {
              handleRoomSize(
                event,
                "bedroomSize" + roomKey,
                "roomsLabel" + roomKey,
                roomKey
              );
              // addFocusToNextInput(event);
            }}
            type="submit"
            className="btn btn-primary d-none"
          >
            Enter
          </button>
        </div>
      </form>
      <form
        className="row g-3 justify-content-around mb-3"
        key={"roomatesForm" + roomKey}
      >
        <label
          key={"roommatesLabel" + roomKey}
          id={"roommatesLabel" + roomKey}
          htmlFor={"roomMatesNumber" + roomKey}
          className="col-3 col-form-label text-info"
        >
          {/* {roommatesMessage || `How many people will be in room ${roomKey}?`} */}
          How many people will be in room {roomKey}?
        </label>

        <div className="col-auto" key={"roommatesDiv" + roomKey}>
          <input
            // autoFocus can't hava two of these at same time
            type="number"
            key={"roommatesInput" + roomKey}
            className="form-control text-info"
            id={"roomMatesNumber" + roomKey}
            placeholder=""
            onBlur={(event, id) => {
              handleRoommates(
                event,
                "roomMatesNumber" + roomKey,
                "roommatesLabel" + roomKey,
                roomKey
              );
              // addFocusToNextInputOnBlur(event, id);
            }}
          />
        </div>

        <div className="col-auto d-none" key={"roommatesButtonDiv" + roomKey}>
          <button
            key={"roommatesButton" + roomKey}
            onClick={(event) => {
              handleRoommates(
                event,
                "roomMatesNumber" + roomKey,
                "roommatesLabel" + roomKey,
                roomKey
              );
              // addFocusToNextInput(event);
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
