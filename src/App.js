import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

//importing the index, container components

import HomeBg from "./Components/HomePage/HomeBg";
import NavbarNewContainer from "./Components/Navigation/index";
import DetailPageContainer from "./Components/DetailPage/index";
import ComicsDetailContainer from "./Components/ComicsDetail/index";
import AllComicsContainer from "./Components/AllComics/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarNewContainer />
        <Route path="/" exact component={HomeBg} />
        <Route path="/hero" exact component={DetailPageContainer} />
        <Route path="/comics" exact component={ComicsDetailContainer} />
        <Route path="/allcomics" exact component={AllComicsContainer} />
      </Router>
    </div>
  );
}

export default App;

//http://gateway.marvel.com/v1/public/characters?ts=blobbbb&apikey=5094ba4401702d0e3ae3bcf66339e50a&hash=97cbca0d2e16d106994214c0e7a64776&name=spider-man
//mysuperpowerheroes.com
