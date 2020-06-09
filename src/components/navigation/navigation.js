import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";

function addNavigation(props) {
  function addButton(className, func, text) {
    return (
      <li>
        <button className={`${className}`} onClick={func}>
          {text}
        </button>
      </li>
    );
  }

  return (
    <nav className="todos_block-nav nav_block">
      <ul className="nav_block-list">
        {addButton(
          "nav_block-all_todos",
          () => props.setFourthData("All"),
          "All Todos"
        )}

        {addButton(
          "nav_block-done_todos",
          () => props.setFourthData("Done"),
          "Done Todos"
        )}

        {addButton(
          "nav_block-undone_todos",
          () => props.setFourthData("Undone"),
          "Undone Todos"
        )}

        {addButton(
          "nav_block-save",
          () => {
            localStorage.clear();
            localStorage.setItem("todos", JSON.stringify(props.thirdData));
          },
          "Save"
        )}

        {addButton(
          "nav_block-clear",
          () => {
            localStorage.clear();
            props.setThirdData([]);
          },
          "Clear"
        )}

        {addButton(
          "nav_block-showTips",
          () => {
            props.setSecondData(true);
          },
          "Tips"
        )}
      </ul>
    </nav>
  );
}

addNavigation.propTypes = {
  secondData: PropTypes.bool,
  thirdData: PropTypes.array,
  setSecondData: PropTypes.func,
  setThirdData: PropTypes.func,
  setFourthData: PropTypes.func,
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
    setFourthData: (data) => dispatch(actions.setFourthData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addNavigation);
