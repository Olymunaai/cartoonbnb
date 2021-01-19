import React, { useState } from "react";
import info from "../info";
// import { useMediaQuery } from "react-responsive";

// import "./bnbinfo.css";
import {
  useParams
} from "react-router-dom";
const Bnbinfo = () => {
  let { entry } = useParams();

  const hotel = info.find((e) => e.id === entry);
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

  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 751px)" });

  return (
    <div className="entry">
      <div className="entry__title--container">
        <h1 className="entry__name">{name}</h1>
        <h4 className="entry__rating">
          <i className="fas fa-star"></i>
          <p className="entry__rating-number">{" " + rating} </p>
        </h4>
      </div>

      <div className="img-nav-wrapper">
        {counter !== 0 && (
          <div className="prev-btn" onClick={previous}>
            <i className="arrow" className="fas fa-angle-left fa-3x"></i>
          </div>
        )}
        {counter !== 4 && (
          <div className="next-btn" onClick={next}>
            <i className="arrow" className="fas fa-angle-right fa-3x"></i>
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
            <img className="sec-img img" alt="bnb" src={img[0]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" alt="bnb" src={img[1]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" alt="bnb" src={img[2]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" alt="bnb" src={img[3]} />
          </div>
          <div className="img-div">
            <img className="sec-img img" alt="bnb" src={img[4]} />
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
            <p className="price">Only {price}

            </p>
          </div>
        </div>
        <div className="bulletpoints">
          <h2 className="bulletpoints__title">Things to do</h2>
          <ul>
            {bulletpoints.map((point) => (
              <li className="bulletpoints__point" >{point}</li>
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
