import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/card/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Bnbinfo from "./components/bnbinfo/Bnbinfo";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [fetch, setFetch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    setFetch(search);
  };

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
          {/* <Search search={search} onChange={onChange} onSubmit={onSubmit} /> */}
          <Cards fetch={fetch} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
