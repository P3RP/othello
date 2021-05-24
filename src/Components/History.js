import React from "react";

function History({ histories }) {
  return (
    <div className="history">
      <div className="history--title">History</div>
      <div id="abc" className="history--container">
        {histories.map((history) =>
          history.player === 0 ? (
            <div className="history--black history--block">
              {history.action}
            </div>
          ) : (
            <div className="history--white history--block">
              {history.action}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default History;
