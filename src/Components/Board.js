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

  const colHeader = (
    <tr>
      <td></td>
      <td>A</td>
      <td>B</td>
      <td>C</td>
      <td>D</td>
      <td>E</td>
      <td>F</td>
      <td>G</td>
      <td>H</td>
    </tr>
  );

  const trs = trIdx.map((row) => (
    <tr key={row}>
      <td>{row + 1}</td>
      {tdIdx.map((col) => (
        <BlockContainer key={col} row={row} col={col} />
      ))}
    </tr>
  ));

  return (
    <>
      <table>
        <thead>{colHeader}</thead>
        <tbody>{trs}</tbody>
      </table>
    </>
  );
}

export default Board;
