import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

//importing the index, container components

import HomeContainer from "./Components/Home";
import NavbarContainer from "./Components/Navigation/index";
import HeroDetailContainer from "./Components/HeroDetail/index";
import ComicsDetailContainer from "./Components/ComicsDetail/index";
import ComicGalleryContainer from "./Components/ComicGallery/index";
import ActiveSearchContainer from "./Components/Navigation/ActiveStateSearch/index";

function App() {
  return (
    <div className="App">
      <Router>
        <ActiveSearchContainer />
        <NavbarContainer />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/hero" exact component={HeroDetailContainer} />
        <Route path="/comics" exact component={ComicsDetailContainer} />
        <Route path="/allcomics" exact component={ComicGalleryContainer} />
      </Router>
    </div>
  );
}

export default App;
