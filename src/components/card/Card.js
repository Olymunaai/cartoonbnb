import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, img, rating, name, description, price } = props;

  const [counter, setCounter] = useState(0);

  const [loading, setLoading] = useState(true);

  const loaded = () => {
    setLoading(false);
  };

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

  return (
    <div className="card">
      <div className="img-nav-wrapper">
        
        {counter !== 0 && (
          <div className="prev" onClick={previous}>
            <i className="arrow" className="fas fa-angle-left fa-3x"></i>
          </div>
        )}
        {counter !== 4 && (
          <div className="next" onClick={next}>
            <i className="arrow" className="fas fa-angle-right fa-3x"></i>
          </div>
        )}

        {/* <h4 className="count">{counter + 1}/5</h4> */}
        <div className="setSize">
          <div
            className="img-container"
            style={{ transform: `translateX(${counter * -100}%)` }}
          >
            {img.map((image) => (
              <img
                onLoad={loaded}
                className="card-img" 
                src={loading ? "img/spinner.gif" : image}
                alt="bnb"
                key={image}
              />
            ))}
          </div>
        </div>
      </div>


      <h4 className="card-rating m5">
        <i className="fas fa-star"></i>
        {" " + rating}
      </h4>
      <Link className="card-name" to={`/bnbinfo/${id}`}>
        <p  className="card-name m5">{name}</p>
      <div className="card-info-container">
        
        <span className="card-link" to={`/bnbinfo/${id}`}>
      <p className="card-desc m5">{description}</p>
      <div className="card-price m5">
          {price} 
      </div>
          </span>
      </div>      </Link>

    </div>
  );
};

export default Card;
