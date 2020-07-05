import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import Tips from "./tips";

export default function Head() {
  const isShowTips = useSelector((state) => state.isShowTips.data);
  const dispatch = useDispatch();

  const isActiveTips = isShowTips
    ? "todo_block-head-tips_btn_active"
    : "todo_block-head-tips_btn";
  return (
    <div className="todo_block-head">
      <h1 className="todo_block-head-title"> to-doooooo </h1>
      <div
        onClick={() => {
          //Check if tips are active
          //And if they are, then forbid to closing tips with click on the tips block and not on the closing tips button
          if (!isShowTips) {
            dispatch(actions.setIsShowTips(!isShowTips));
          }
        }}
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
