import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";
import dndIcon from "../../../utils/img/DND-Icon.svg";
import inputIcon from "../../../utils/img/Input-Tips-Icon.svg";

function addTips(props) {
  const isActiveTips = props.isShowTips ? "tips_block-active" : "tips_block";
  return (
    <div className={`todo_block-head-tips ${isActiveTips}`}>
      <div
        className="tips_block-close_tips"
        onClick={() => props.setIsShowTips(!props.isShowTips)}
      />
      <ul className="tips_block-tips">
        <li>
          Click on
          <img src={inputIcon} alt="icon" className="input_icon" />
          or the input to focus on input. Pressing again will clear the input
          and unfocus input
        </li>
        <li>To add a todo click on &quot;Add&quot; button or press Enter</li>
        <li>To delete todo click on trash icon</li>
        <li>To delete all todo list, click &quot;Clear&quot;</li>
        <li>
          Click on
          <img src={dndIcon} alt="icon" className="dnd_icon" />
          to drag the todo
        </li>
      </ul>
    </div>
  );
}

addTips.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(addTips);
