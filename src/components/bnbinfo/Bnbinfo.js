import React, { useState } from "react";
import info from "../info";
import { useMediaQuery } from "react-responsive";

import "./bnbinfo.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const Bnbinfo = () => {
  let { entry } = useParams();

  const hotel = info.find((e) => e.id == entry);
  const {
    id,
    img,
    name,
    price,
    rating,
    extended,
    description,
    bulletpoints,
  } = hotel;

  const [counter, setCounter] = useState(0);

  const next = () => {
    if (counter === 4) {
    } else {
      setCounter(counter + 1);
    }
  };

  const previous = () => {
    if (counter === 0) {
    } else {
      setCounter(counter - 1);
    }
  };

  const isBigScreen = useMediaQuery({ query: "(min-device-width: 751px)" });

  return (
    <div className="info">
      <div className="name-rating">
        <h1 classname="name">{name}</h1>
        <h4 className="rating">
          <i class="fas fa-star"></i>
          {" " + rating}
        </h4>
      </div>

      <div className="img-nav-wrapper">
        {counter !== 0 && (
          <div className="prev-btn" onClick={previous}>
            <i className="arrow" class="fas fa-angle-left fa-3x"></i>
          </div>
        )}
        {counter !== 4 && (
          <div className="next-btn" onClick={next}>
            <i className="arrow" class="fas fa-angle-right fa-3x"></i>
          </div>
        )}

        <h4 className="count counter">{counter + 1}/5</h4>

        <div
          className="img-display"
          style={{
            transform: `translateX(${counter * -100}vw)`,
          }}
        >
          <div className="main-img img-div">
            <img className="sec-img img" src={img[0]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" src={img[1]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" src={img[2]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" src={img[3]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" src={img[4]} />
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="descriptions">
          <p className="intro-desc">
            <strong>{description}</strong>
          </p>
          <div className="information">
            <p>{extended}</p>
            <p>
              <strong className="price">{price}</strong>
            </p>
          </div>
        </div>
        <div className="bulletpoints">
          <h2>Things to do</h2>
          <ul>
            {bulletpoints.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="book">
        <button className="book-now">Book Now!</button>
      </div>
    </div>
  );
};

export default Bnbinfo;
