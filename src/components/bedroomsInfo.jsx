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

  return bedroomsKeys.map((roomKey) => (
    <React.Fragment>
      <form className="m-3" key={"bedroomsForm" + roomKey}>
        <div className="form-group m-auto" key={"bedroomsDiv" + roomKey}>
          <label
            key={"roomsLabel" + roomKey}
            id={"roomsLabel" + roomKey}
            htmlFor={"bedroomSize" + roomKey}
            className="text-info"
          >
            Enter size of room {roomKey} in any measurement
          </label>
          <div className="submitDiv">
            {roomKey === 1 ? (
              <input
                autoFocus
                type="number"
                key={"roomsInput" + roomKey}
                className="form-control text-info col-auto mt-3"
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
                className="form-control text-info col-auto mt-3"
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
              className="btn btn-danger m-2"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
      <form key={"roomatesForm" + roomKey}>
        <div className="form-group m-auto" key={"roommatesDiv" + roomKey}>
          <label
            key={"roommatesLabel" + roomKey}
            id={"roommatesLabel" + roomKey}
            htmlFor={"roomMatesNumber" + roomKey}
            className="text-info"
          >
            {/* {roommatesMessage || `How many people will be in room ${roomKey}?`} */}
            How many people will be in room {roomKey}?
          </label>
          <div className="submitDiv">
            <input
              // autoFocus can't hava two of these at same time
              type="number"
              key={"roommatesInput" + roomKey}
              className="form-control text-info mt-3"
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
              className="btn btn-danger m-2"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  ));
};

export default BedroomsInfo;
