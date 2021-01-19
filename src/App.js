import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import Cards from "./components/card/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Bnbinfo from "./components/bnbinfo/Bnbinfo";
import Footer from "./components/footer/Footer";

function App() {


  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/bnbinfo/:entry">
          <Bnbinfo />
        </Route>
        <Route path="/">
          <Cards />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
