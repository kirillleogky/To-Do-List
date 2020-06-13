import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";
import Tips from "./tips/tips";

function Head(props) {
  return (
    <div className="todo_block-head">
      <h1 className="todo_block-head-title"> To-doooooo </h1>
      <div
        onClick={() => props.setSecondData(true)}
        className="todo_block-head-tips_btn"
      />
      <Tips />
    </div>
  );
}

Head.propTypes = {
  setSecondData: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
  };
};

export default connect(null, mapDispatchToProps)(Head);
