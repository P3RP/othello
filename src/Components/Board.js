import React from "react";
import Block from "./Block";

function Board(props) {
  const HEIGHT = 8;
  const WIDTH = 8;

  const trIdx = [];
  for (let i = 0; i < HEIGHT; i++) {
    trIdx[i] = i;
  }

  const tdIdx = [];
  for (let i = 0; i < WIDTH; i++) {
    tdIdx[i] = i;
  }

  const trs = trIdx.map((low) => (
    <tr key={low}>
      {tdIdx.map((col) => (
        <Block className="Block" key={col} low={low} col={col} />
      ))}
    </tr>
  ));

  return (
    <table>
      <tbody>{trs}</tbody>
    </table>
  );
}

export default Board;
