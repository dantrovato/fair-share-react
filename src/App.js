import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Subheader from "./components/subheader";
import CommonAreas from "./components/commonAreas";
import PropertyValue from "./components/propertyValue";
import BedroomCount from "./components/bedroomCount";
import BedroomsInfo from "./components/bedroomsInfo";
import ResultMessage from "./components/resultMessage";
import Image from "./components/image";
import Footer from "./components/footer";

// fix:
// add ? to explain common areas
// make sure focus goes on input clicked
// make image load from file instead of url
// customise colors
// swap with other fairshare

class App extends Component {
  state = {
    propertyValue: 0,
    propertyValueMessage: "Enter the rent for the entire property",
    commonAreasPercentage: undefined,
    commonAreasMessage: "Enter value of common areas",
    bedroomCount: 0,
    bedroomCountMessage: "Enter the number of bedrooms",
    dimentions: [],
    roommates: [],
  };

  addErrorStyles = (label) => {
    label.classList.remove("text-info");
    label.classList.add("text-danger");
  };

  removeErrorStyles = (label) => {
    label.classList.remove("text-danger");
    label.classList.add("text-info");
  };

  handlePropertyValue = (event) => {
    event.preventDefault();
    const input = document.querySelector("#propertyValue");
    const label = document.querySelector("#propertyValueLabel");
    const propertyValue = Number(input.value);
    input.value = propertyValue;

    if (propertyValue <= 0) {
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    this.setState({ propertyValue });
    this.addFocusToNextInput(event);
  };

  handleCommonAreas = (event) => {
    event.preventDefault();
    console.log("handleCommonAreas:", event.target.tagName);
    const input = document.querySelector("#commonAreasValue");
    const label = document.querySelector("#commonAreasLabel");
    const commonAreasPercentage = Number(input.value);
    input.value = commonAreasPercentage;

    if (commonAreasPercentage < 0 || commonAreasPercentage > 100) {
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    this.setState({ commonAreasPercentage });
    this.addFocusToNextInput(event);
  };

  handleBedroomCount = (event) => {
    event.preventDefault();
    const input = document.querySelector("#bedroomCount");
    const label = document.querySelector("#bedroomCountLabel");
    const bedroomCount = Number(input.value);
    input.value = bedroomCount;

    if (bedroomCount < 1) {
      this.addErrorStyles(label);
      return;
    }

    if (!Number.isInteger(bedroomCount)) {
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    this.setState({ bedroomCount });
    this.addFocusToNextInput(event);
  };

  addFocusToNextInput = (event) => {
    if (
      event.target.closest("form").nextElementSibling.querySelector("input")
    ) {
      event.target
        .closest("form")
        .nextElementSibling.querySelector("input")
        .focus();
      return;
    }
  };

  handleRoomSize = (event, id, labelId, roomKey) => {
    // Take the input element and put that in the dimentions array. That way we can check that the objects are unique. Then we can later map the values of each object onto a new array
    event.preventDefault();
    const { dimentions } = this.state;
    const roomSize = document.getElementById(id);
    const label = document.getElementById(labelId);

    const cloneDimentions = [...dimentions];
    if (!dimentions.includes(roomSize)) {
      cloneDimentions.push(roomSize);
    }

    if (roomSize.value <= 0) {
      const label = document.getElementById(labelId);
      this.addErrorStyles(label);
      return;
    }

    roomSize.value = Number(roomSize.value);
    this.removeErrorStyles(label);
    this.setState({ dimentions: cloneDimentions });
    this.addFocusToNextInput(event);
  };

  handleRoommates = (event, id, labelId, roomKey) => {
    event.preventDefault();
    const { roommates } = this.state;
    const numberRoommates = document.getElementById(id);
    const label = document.getElementById(labelId);

    const cloneRoommates = [...roommates];
    if (!roommates.includes(numberRoommates)) {
      cloneRoommates.push(numberRoommates);
    }

    const value = Number(numberRoommates.value);
    if (value <= 0 || !Number.isInteger(value)) {
      this.addErrorStyles(label);
      return;
    }

    numberRoommates.value = Number(numberRoommates.value);
    this.removeErrorStyles(label);
    this.setState({ roommates: cloneRoommates });
    this.addFocusToNextInput(event);

    // take out the focus when value is entered
    document.getElementById(id).blur();
  };

  render() {
    const {
      propertyValue,
      propertyValueMessage,
      commonAreasPercentage,
      commonAreasMessage,
      bedroomCount,
      bedroomCountMessage,
      dimentions,
      roommates,
    } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        {/* <div className="content">
          <Route path="/about" component={About} />
        </div> */}
        <Header />
        <Image />
        <Subheader />
        <PropertyValue
          onClick={(event) => this.handlePropertyValue(event)}
          propertyValueMessage={propertyValueMessage}
        />
        <CommonAreas
          propertyValue={propertyValue}
          onClick={(event) => this.handleCommonAreas(event)}
          commonAreasMessage={commonAreasMessage}
        />
        <BedroomCount
          commonAreasPercentage={commonAreasPercentage}
          onClick={(event) => this.handleBedroomCount(event)}
          bedroomCountMessage={bedroomCountMessage}
        />
        <BedroomsInfo
          handleRoomSize={(event, id, labelId, roomKey, key) =>
            this.handleRoomSize(event, id, labelId, roomKey, key)
          }
          handleRoommates={(event, id, labelId, roomKey) =>
            this.handleRoommates(event, id, labelId, roomKey)
          }
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
