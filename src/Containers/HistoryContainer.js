import React from "react";
import { connect } from "react-redux";
import History from "../History";

function HistoryContainer(props) {
  return <History histories={props.history}></History>;
}

const mapStateToProps = ({ calculate }) => ({
  history: calculate.history,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
