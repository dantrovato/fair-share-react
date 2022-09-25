import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <div
        className="image"
        style={{
          backgroundImage: `url("https://www.minuteschool.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-09-at-12.06.37-PM.png")`,
        }}
      ></div>
    );
  }
}

export default Image;
