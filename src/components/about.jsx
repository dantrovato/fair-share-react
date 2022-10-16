import React from "react";

const About = () => {
  return (
    <div className="m-5 bg-info p-5 text-white">
      <h1>How it works</h1>
      <p>
        This is an application to help flatmates work out what a fair share of
        the rent is. It asks a user to enter the price of the whole property,
        then an estimate of what they think the value of the common areas is as
        a percentage of the total rent. Below that it asks for the dimentions of
        each room and how many people are gonna share that room. Every flatmate
        pays an equal share on the percentage allocated to the common areas
        while on the remaining rent they pay proportionately according to the
        size of their room
      </p>
    </div>
  );
};

export default About;
