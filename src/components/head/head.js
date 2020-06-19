import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";
import Tips from "./tips/tips";

function Head(props) {
  const isActiveTips = props.isShowTips
    ? "todo_block-head-tips_btn_active"
    : "todo_block-head-tips_btn";
  return (
    <div className="todo_block-head">
      <h1 className="todo_block-head-title"> to-doooooo </h1>
      <div
        onClick={() => props.setIsShowTips(!props.isShowTips)}
        className={`${isActiveTips}`}
      >
        <Tips />
      </div>
    </div>
  );
}

Head.propTypes = {
  isShowTips: PropTypes.bool,
  setIsShowTips: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    isShowTips: store.isShowTips.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsShowTips: (data) => dispatch(actions.setIsShowTips(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
