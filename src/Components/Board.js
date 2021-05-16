import React from "react";
import BlockContainer from "../Containers/BlockContainer";

function Board({ board, onPlay }) {
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

  const trs = trIdx.map((row) => (
    <tr key={row}>
      {tdIdx.map((col) => (
        <BlockContainer key={col} row={row} col={col} />
      ))}
    </tr>
  ));

  return (
    <>
      <table>
        <tbody>{trs}</tbody>
      </table>
    </>
  );
}

export default Board;
