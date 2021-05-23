import React from "react";
import "./main.scss";
import BoardContainer from "./Containers/BoardContainer";
import PassContainer from "./Containers/PassContainer";
import ScoreContainer from "./Containers/ScoreContainer";
import HistoryContainer from "./Containers/HistoryContainer";
import UndoContainer from "./Containers/UndoContainer";

function App() {
  return (
    <div className="App">
      <ScoreContainer />
      <div>
        <BoardContainer />
      </div>
      <div>
        <HistoryContainer />
      </div>
      <PassContainer />
      <UndoContainer />
    </div>
  );
}

export default App;
