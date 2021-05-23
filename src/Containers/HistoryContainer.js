import React from "react";
import { connect } from "react-redux";
import History from "../Components/History";

function HistoryContainer(props) {
  return <History histories={props.history}></History>;
}

const mapStateToProps = (state) => ({
  history: state.boardState.history,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
