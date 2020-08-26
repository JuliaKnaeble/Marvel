import React from "react";
import "./App.scss";

import NavDesktop from "./Navigation/NavDesktop";
import DetailPage from "./DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <NavDesktop />
      <DetailPage />
    </div>
  );
}

export default App;

//http://gateway.marvel.com/v1/public/characters?ts=blobbbb&apikey=5094ba4401702d0e3ae3bcf66339e50a&hash=97cbca0d2e16d106994214c0e7a64776&name=spider-man
//mysuperpowerheroes.com
