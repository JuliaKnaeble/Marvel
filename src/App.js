import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

//importing the index, container components

import HomeContainer from "./Components/HomePage";
import NavbarContainer from "./Components/Navigation/index";
import DetailPageContainer from "./Components/DetailPage/index";
import ComicsDetailContainer from "./Components/ComicsDetail/index";
import AllComicsContainer from "./Components/AllComics/index";
import ActiveSearchContainer from "./Components/Navigation/ActiveStateSearch/index";

function App() {
  return (
    <div className="App">
      <Router>
        <ActiveSearchContainer />
        <NavbarContainer />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/hero" exact component={DetailPageContainer} />
        <Route path="/comics" exact component={ComicsDetailContainer} />
        <Route path="/allcomics" exact component={AllComicsContainer} />
      </Router>
    </div>
  );
}

export default App;
