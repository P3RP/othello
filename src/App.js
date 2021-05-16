import React from "react";
import "./main.scss";
import BoardContainer from "./Containers/BoardContainer";
import PassContainer from "./Containers/PassContainer";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <BoardContainer />
        <PassContainer />
      </div>
    </div>
  );
}

export default App;
