import React, { useState } from "react";
import Card from "./Card";
import info from "../info";
// import "./card.css";

const Cards = ({ fetch }) => {
  return (
    <div className="cards-container">
      {info.map((card) => (
        <Card
          id={card.id}
          img={card.img}
          rating={card.rating}
          name={card.name}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Cards;
