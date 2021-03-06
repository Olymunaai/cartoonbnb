import React, { useState } from "react";
// import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState("close");
  const [drop, setDrop] = useState("");

  const onClick = () => {
    if (menu === "close") {
      setMenu("open");
      setDrop("menudrop");
    } else {
      setMenu("close");
      setDrop("");
    }
    console.log(menu);
  };

  return (
    <nav className="navbar">
      <Link className="nav-item-link" to="/">
        {/* <img className="logo" src={"/img/ctn.jpg"} />  */}
        <h2 className="title">
        cartoonbnb      
        </h2>

        </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-item-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-item-link" to="/about">
            About
          </Link>
        </li>
      </ul>
      <div className="menu-btn" onClick={onClick}>
        <div className={menu + " burger"}></div>
        <ul className={"burger-nav " + drop}>
          <li className="burger-item">
            <Link className="burger-item" to="/">
              Home
            </Link>
          </li>
          <li className="burger-item">
            <Link className="burger-item" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
