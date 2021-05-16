import React from "react";
import BlockContainer from "../Containers/BlockContainer";
import { HEIGHT, WIDTH } from "../store/modules/othello";

function Board({ board, onPlay }) {
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
