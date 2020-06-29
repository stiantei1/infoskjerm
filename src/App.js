import React from "react";
import "./App.css";
import Reddit from "./Reddit";
import Bikes from "./Bikes";
import Clock from "./Clock";

const App = () => {
    return (
        <div className="App">
          <h1>Inforskjerm</h1>
            <Clock />
            <Reddit />
            <Bikes />
        </div>
    );
};

export default App;