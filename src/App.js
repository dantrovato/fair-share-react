import React, { Component } from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header";
import CommonAreas from "./components/commonAreas";
import PropertyValue from "./components/propertyValue";
import BedroomCount from "./components/bedroomCount";
import BedroomsInfo from "./components/bedroomsInfo";
import ResultMessage from "./components/resultMessage";
import Image from "./components/image";

class App extends Component {
  state = {
    propertyValue: 0,
    commonAreasPercentage: 0,
    bedroomCount: 0,
    dimentions: [],
    roommates: [],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  // ref = useRef(null);

  // handlePropertyValueBlur = () => {
  //   this.ref.current.focus();
  //   // document.querySelector("#commonAreasValue").focus;
  // };

  handlePropertyValue = (event) => {
    event.preventDefault();
    const propertyValue = Number(
      document.querySelector("#propertyValue").value
    );
    if (propertyValue <= 0) {
      return;
    }

    // take out the focus when value is entered
    document.querySelector("#propertyValue").blur();

    this.setState({ propertyValue });
  };

  handleCommonAreas = (event) => {
    event.preventDefault();
    const commonAreasPercentage = Number(
      document.querySelector("#commonAreasValue").value
    );
    if (commonAreasPercentage <= 0) {
      return;
    }

    // take out the focus when value is entered
    document.querySelector("#commonAreasValue").blur();

    this.setState({ commonAreasPercentage });
  };

  handleBedroomCount = (event) => {
    event.preventDefault();
    const bedroomCount = Number(document.querySelector("#bedroomCount").value);
    if (bedroomCount < 2) {
      return;
    }

    // take out the focus when value is entered
    document.querySelector("#bedroomCount").blur();

    this.setState({ bedroomCount });
  };

  handleRoomSize = (event, id) => {
    // Take the input element and put that in the dimentions array
    // That way we can check that the objects are unique.
    // Then we can later map the values of each object onto a new array
    event.preventDefault();
    const { dimentions } = this.state;
    const roomSize = document.getElementById(id);
    const cloneDimentions = [...dimentions];
    if (!dimentions.includes(roomSize)) {
      cloneDimentions.push(roomSize);
      // take out the focus when value is entered
      document.getElementById(id).blur();
    }

    this.setState({ dimentions: cloneDimentions });
  };

  // Take the input element and put that in the roommates array
  // That way we can check that the objects are unique.
  // Then we can later map the values of each object onto a new array
  handleRoommates = (event, id) => {
    event.preventDefault();
    const { roommates } = this.state;
    const numberRoommates = document.getElementById(id);
    const cloneRoommates = [...roommates];
    if (!roommates.includes(numberRoommates)) {
      cloneRoommates.push(numberRoommates);
      // take out the focus when value is entered
      document.getElementById(id).blur();
    }

    console.log(document.getElementById(id));

    this.setState({ roommates: cloneRoommates });
  };

  render() {
    const {
      propertyValue,
      commonAreasPercentage,
      bedroomCount,
      dimentions,
      roommates,
    } = this.state;

    if (document.querySelector("#commonAreaValue")) {
      document.querySelector("#commonAreaValue").focus();
    }
    return (
      <React.Fragment>
        <Header />
        <Image />
        <PropertyValue onClick={(event) => this.handlePropertyValue(event)} />
        <CommonAreas
          propertyValue={propertyValue}
          onClick={(event) => this.handleCommonAreas(event)}
        />
        <BedroomCount
          commonAreasPercentage={commonAreasPercentage}
          onClick={(event) => this.handleBedroomCount(event)}
        />
        <BedroomsInfo
          handleRoomSize={(event, id) => this.handleRoomSize(event, id)}
          handleRoommates={(event, id) => this.handleRoommates(event, id)}
          bedroomCount={bedroomCount}
          onBlur={(event, id) => {
            document.getElementById(id).blur();
            this.handleRoomSize(event);
            this.handleRoommates(event);
          }}
          onClick={(event, id) => {
            document.getElementById(id).blur();
            this.handleRoomSize(event);
            this.handleRoommates(event);
          }}
        />
        <ResultMessage
          propertyValue={propertyValue}
          commonAreasPercentage={commonAreasPercentage}
          bedroomCount={bedroomCount}
          dimentions={dimentions}
          roommates={roommates}
        />
      </React.Fragment>
    );
  }
}

export default App;
