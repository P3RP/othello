import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";

function BoardContainer(props) {
  return <Board />;
}

const mapStateToProps = ({ calculate }) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
