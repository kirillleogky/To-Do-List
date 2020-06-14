import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

function addTips(props) {
  const isActiveTips = props.secondData ? "tips_block-active" : "tips_block";
  return (
    <div className={`todo_block-head-tips ${isActiveTips}`}>
      <div
        className="tips_block-close_tips"
        onClick={() => props.setSecondData(!props.secondData)}
      />
      <ul className="tips_block-tips">
        <li>To hide or show the input field, click on the button</li>
        <li>
          To add a to-do list, write text in the input field and press Enter or
          the button on the right
        </li>
        <li>
          To delete one item, hover over it and click on the trash can icon
        </li>
        <li>To delete all to-do lists, click &quot;Clear&quot;</li>
        <li>Click &quot;Save&quot; to save the to-do list</li>
      </ul>
    </div>
  );
}

addTips.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(addTips);
