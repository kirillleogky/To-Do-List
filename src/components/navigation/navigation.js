import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";

function addNavigation(props) {
  return (
    <nav className="todos_block-nav nav_block">
      <ul className="nav_block-list">
        <li>
          <button
            className="nav_block-save"
            onClick={() => {
              localStorage.clear();
              localStorage.setItem("todos", JSON.stringify(props.thirdData));
            }}
          >
            Save
          </button>
        </li>
        <li>
          <button
            className="nav_block-clear"
            onClick={() => {
              localStorage.clear();
              props.setThirdData([]);
            }}
          >
            Clear
          </button>
        </li>
        <li>
          <button
            className="nav_block-showTips"
            onClick={() => {
              props.setSecondData(true);
            }}
          >
            Tips
          </button>
        </li>
      </ul>
    </nav>
  );
}

addNavigation.propTypes = {
  secondData: PropTypes.bool,
  thirdData: PropTypes.array,
  setSecondData: PropTypes.func,
  setThirdData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    secondData: store.secondData.data,
    thirdData: store.thirdData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addNavigation);
