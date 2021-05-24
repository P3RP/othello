import React from "react";
import { connect } from "react-redux";

import Reset from "../Components/Reset";
import { reset } from "../store/modules/board";

function ResetContainer(props) {
  return <Reset onReset={() => props.reset()} />;
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetContainer);
