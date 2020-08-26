import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import NavDesktop from "./Navigation/NavDesktop";
import HomePage from "./HomePage/HomePage";
import DetailPage from "./DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavDesktop />
        <Route path="/" exact component={HomePage} />
        <Route path="/heroes" exact component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;

//http://gateway.marvel.com/v1/public/characters?ts=blobbbb&apikey=5094ba4401702d0e3ae3bcf66339e50a&hash=97cbca0d2e16d106994214c0e7a64776&name=spider-man
//mysuperpowerheroes.com
