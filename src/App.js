import React from "react";
import "./App.css";
import Reddit from "./Reddit";
import Bikes from "./Bikes";

const App = () => {
    return (
        <div className="App">
          <h1>Inforskjerm</h1>
            <Reddit />
            <Bikes />
        </div>
    );
};

export default App;