import React from "react";
import "./main.scss";
import BoardContainer from "./Containers/BoardContainer";
import PassContainer from "./Containers/PassContainer";
import ScoreContainer from "./Containers/ScoreContainer";

function App() {
  return (
    <div className="App">
      <div>
        <ScoreContainer />
      </div>
      <div>
        <BoardContainer />
        <PassContainer />
      </div>
    </div>
  );
}

export default App;
