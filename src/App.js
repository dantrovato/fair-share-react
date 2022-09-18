import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header";
import CommonAreas from "./components/commonAreas";
import PropertyValue from "./components/propertyValue";
import BedroomCount from "./components/bedroomCount";
import BedroomsInfo from "./components/bedroomsInfo";
import ResultMessage from "./components/resultMessage";
import { clone } from "lodash";

class App extends Component {
  state = {
    propertyValue: 0,
    commonAreasValue: 0,
    bedroomCount: 0,
    dimentions: [],
    roommates: [],
  };

  handlePropertyValue = (event) => {
    event.preventDefault();
    const propertyValue = Number(
      document.querySelector("#propertyValue").value
    );
    if (propertyValue <= 0) {
      return;
    }

    this.setState({ propertyValue });
  };

  handleCommonAreas = (event) => {
    event.preventDefault();
    const commonAreasValue = Number(
      document.querySelector("#commonAreasValue").value
    );
    if (commonAreasValue <= 0) {
      return;
    }

    this.setState({ commonAreasValue });
  };

  handleBedroomCount = (event) => {
    event.preventDefault();
    const bedroomCount = Number(document.querySelector("#bedroomCount").value);
    if (bedroomCount < 2) {
      return;
    }

    this.setState({ bedroomCount });
  };

  // handleBedroomsInfo = (event) => {
  //   event.preventDefault();
  //   const { dimentions, roommates } = this.state;
  //   // dimentions.length + 1 should be the "roomKey" portion of the id
  //   const bedroomSize = document.querySelector(
  //     "bedroomSize" + dimentions.length + 1
  //   ).value;

  //   const roommatesNumber = document.querySelector(
  //     "roommatesNumber" + roommates.length + 1
  //   ).value;

  //   const cloneDimentions = [...dimentions];
  //   const cloneRoommates = [...roommates];

  //   cloneDimentions.push(bedroomSize);
  //   cloneRoommates.push(roommatesNumber);

  //   this.setState({ dimentions: cloneDimentions, roommates: cloneRoommates });
  // };

  handleRoomSize = (event, id) => {
    console.log(id);
    event.preventDefault();
    const { dimentions } = this.state;
    const roomSize = Number(document.getElementById(id).value);
    const cloneDimentions = [...dimentions];
    cloneDimentions.push(roomSize);

    this.setState({ dimentions: cloneDimentions });
  };

  handleRoommates = (event, id) => {
    event.preventDefault();
    const { roommates } = this.state;
    const numberRoommates = Number(document.getElementById(id).value);
    const cloneRoommates = [...roommates];
    cloneRoommates.push(numberRoommates);
    // console.log(roommates);
    this.setState({ roommates: cloneRoommates });
  };

  render() {
    const {
      propertyValue,
      commonAreasValue,
      bedroomCount,
      dimentions,
      roommates,
    } = this.state;

    return (
      <React.Fragment>
        <Header />
        <PropertyValue onClick={(event) => this.handlePropertyValue(event)} />
        <CommonAreas
          propertyValue={propertyValue}
          onClick={(event) => this.handleCommonAreas(event)}
        />
        <BedroomCount
          commonAreasValue={commonAreasValue}
          onClick={(event) => this.handleBedroomCount(event)}
        />
        <BedroomsInfo
          handleRoomSize={(event, id) => this.handleRoomSize(event, id)}
          handleRoommates={(event, id) => this.handleRoommates(event, id)}
          bedroomCount={bedroomCount}
          // onClick={(event) => this.handleBedroomsInfo(event)}
        />
        <ResultMessage
          propertyValue={propertyValue}
          commonAreasValue={commonAreasValue}
          bedroomCount={bedroomCount}
          dimentions={dimentions}
          roommates={roommates}
        />
      </React.Fragment>
    );
  }
}

export default App;
