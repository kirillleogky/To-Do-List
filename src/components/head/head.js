import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";
import Tips from "./tips/tips";

function Head(props) {
  const isActiveTips = props.secondData
    ? "todo_block-head-tips_btn_active"
    : "todo_block-head-tips_btn";
  return (
    <div className="todo_block-head">
      <h1 className="todo_block-head-title"> to-doooooo </h1>
      <div
        onClick={() => props.setSecondData(!props.secondData)}
        className={`${isActiveTips}`}
      >
        <Tips />
      </div>
    </div>
  );
}

Head.propTypes = {
  secondData: PropTypes.bool,
  setSecondData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    secondData: store.secondData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
