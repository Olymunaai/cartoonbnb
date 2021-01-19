import React from "react";
// import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <p className="about">
        This project was created using React, Flexbox and Grid to create a page
        layout that would work for various online shopping and booking
        companies. I originally started the carousel image components as a
        vanilla Javascript file, but it ended up being easier to do this with
        React instead.
      </p>
      <p className="about">
        The information for each entry is stored within a .js file as an array
        of objects, which is accessed by the relevant components, rather than 
        on a separate database such as MongoDB.
      </p>
    </div>
  );
};

export default About;
