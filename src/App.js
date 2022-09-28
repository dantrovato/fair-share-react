import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header";
import Subheader from "./components/subheader";
import CommonAreas from "./components/commonAreas";
import PropertyValue from "./components/propertyValue";
import BedroomCount from "./components/bedroomCount";
import BedroomsInfo from "./components/bedroomsInfo";
import ResultMessage from "./components/resultMessage";
import Image from "./components/image";
import Footer from "./components/footer";
import { isInteger, remove } from "lodash";
// fix:
// show error if any inputs are missing
// Remove Each child in a list should have a unique "key" prop from BedroomsInfo component.
// make border red
// remove focus to inputs edited after results shown
// add bottom padding to cyan result div
// move writing on footer to the bottom
// remove decimal points from inputs on roommates and number of rooms
// make image load from file instead of url
// make sure focus goes on input clicked
// customise colors
// make view scroll up automatically
// swap with other fairshare

// fixed:
// Adjust positioning on results section
// Remove document.querySelector('#propertyValue').blur(); (and from other inputs) to take out the focus when value is entered as adding the autoFocus does that for us anyways.
// make placeholders same color as text

class App extends Component {
  state = {
    propertyValue: 0,
    propertyValueMessage: "Enter the rent for the entire property",
    commonAreasPercentage: undefined,
    commonAreasMessage:
      "Enter value of common areas as a percentage of entire property",
    bedroomCount: 0,
    bedroomCountMessage: "Enter the number of bedrooms",
    dimentions: [],
    // bedroomSizeMessage: undefined,
    roommates: [],
    // roommatesMessage: undefined,
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
    let propertyValueMessage;
    // resets the input display to a valid number in case somebody enters 00009 or some nonsense
    input.value = propertyValue;

    if (propertyValue <= 0) {
      propertyValueMessage = "Enter a number greater than 0";
      this.setState({ propertyValueMessage });
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    propertyValueMessage = `The rent for the entire property is $${propertyValue}`;
    this.setState({ propertyValue, propertyValueMessage });
  };

  handleCommonAreas = (event) => {
    event.preventDefault();
    const input = document.querySelector("#commonAreasValue");
    const label = document.querySelector("#commonAreasLabel");
    const commonAreasPercentage = Number(input.value);
    let commonAreasMessage;
    input.value = commonAreasPercentage;

    if (commonAreasPercentage < 0 || commonAreasPercentage > 100) {
      commonAreasMessage = "Enter a number between 0 and 100";
      this.setState({ commonAreasMessage });
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    commonAreasMessage = `The value of the common area is ${commonAreasPercentage}%`;
    this.setState({ commonAreasPercentage, commonAreasMessage });
  };

  handleBedroomCount = (event) => {
    event.preventDefault();
    const input = document.querySelector("#bedroomCount");
    const label = document.querySelector("#bedroomCountLabel");
    const bedroomCount = Number(input.value);
    let bedroomCountMessage;
    input.value = bedroomCount;

    if (bedroomCount < 1) {
      bedroomCountMessage = "Enter a number greater than 0";
      this.setState({ bedroomCountMessage });
      this.addErrorStyles(label);
      return;
    }

    if (!Number.isInteger(bedroomCount)) {
      bedroomCountMessage = "Enter a whole number";
      this.setState({ bedroomCountMessage });
      this.addErrorStyles(label);
      return;
    }

    this.removeErrorStyles(label);
    bedroomCountMessage = `There property has ${bedroomCount} bedrooms`;
    this.setState({ bedroomCount, bedroomCountMessage });
  };

  // helper method for handleRoomSize and handleRoommates
  addFocusToNextInput = (event) => {
    if (
      event.target.closest("form").nextElementSibling.querySelector("input")
    ) {
      event.target
        .closest("form")
        .nextElementSibling.querySelector("input")
        .focus();
    }
  };

  // code taken from below line: const label = document.getElementById(labelId);
  // let bedroomSizeMessage;
  // this.state.bedroomSizeMessage = `Enter the size of room ${roomKey} in sq metres or feet`;
  // bedroomSizeMessage = this.state.bedroomSizeMessage;
  // this.setState({ bedroomSizeMessage });
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
      label.textContent = "Enter a number greater than 0";
      this.addErrorStyles(label);
      return;
    }

    roomSize.value = Number(roomSize.value);
    label.textContent = `The size of room ${roomKey} is ${roomSize.value}`;
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
      label.textContent = "Enter a whole number greater than 0";
      this.addErrorStyles(label);
      return;
    }

    numberRoommates.value = Number(numberRoommates.value);
    label.textContent = `There will be ${numberRoommates.value} person in this room`;
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
