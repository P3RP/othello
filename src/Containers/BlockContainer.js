import React from "react";
import { connect } from "react-redux";
import Button from "../Components/Button";
import { clear } from "../store/modules/cacluate";

function ClearContainer(props) {
  const handleClear = () => {
    props.clear();
  };
  return (
    <Button
      Onclick={() => handleClear()}
      shape="calc__keyboard__ac"
      value="AC"
    ></Button>
  );
}

const mapStateToProps = ({ calculate }) => ({
  first: calculate.first,
  second: calculate.second,
  operator: calculate.operator,
  history: calculate.history,
});

const mapDispatchToProps = {
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearContainer);
