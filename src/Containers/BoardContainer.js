import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";
import { refresh } from "../store/modules/board";

function BoardContainer(props) {
  return <Board />;
}

const mapStateToProps = ({ calculate }) => ({});

const mapDispatchToProps = {
  refresh,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
