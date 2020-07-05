import React from "react";
import PropTypes from "prop-types";
import actions from "../../../actions";
import dndIcon from "../../../utils/img/DND-Icon.svg";
import inputIcon from "../../../utils/img/Input-Tips-Icon.svg";
import { useSelector, useDispatch } from "react-redux";

export default function AddTips() {
  const isShowTips = useSelector((state) => state.isShowTips.data);
  const dispatch = useDispatch();

  const isActiveTips = isShowTips ? "tips_block-active" : "tips_block";
  return (
    <div className={`todo_block-head-tips ${isActiveTips}`}>
      <div
        className="tips_block-close_tips"
        onClick={() => dispatch(actions.setIsShowTips(!isShowTips))}
      />
      <ul className="tips_block-tips">
        <li>
          Click on&nbsp;
          <img src={inputIcon} alt="icon" className="input_icon" />
          or&nbsp;the input to&nbsp;focus on&nbsp;input. Pressing again will
          clear the input and unfocus input
        </li>
        <li>
          To&nbsp;add a&nbsp;todo click on&nbsp;&laquo;Add&raquo; button
          or&nbsp;press Enter
        </li>
        <li>To&nbsp;delete todo click on&nbsp;trash icon</li>
        <li>To&nbsp;delete all todo list, click &laquo;Clear&raquo;</li>
        <li>
          Click on&nbsp;
          <img src={dndIcon} alt="icon" className="dnd_icon" />
          to&nbsp;drag the todo
        </li>
      </ul>
    </div>
  );
}

AddTips.propTypes = {
  isShowTips: PropTypes.bool,
  setIsShowTips: PropTypes.func,
};
