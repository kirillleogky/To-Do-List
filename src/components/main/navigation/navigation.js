import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

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
          () => props.setSixthData("All"),
          "All Todos"
        )}

        {addButton(
          "nav_block-done_todos",
          () => {
            props.setFourthData(
              props.thirdData.filter((item) => item.isComplete)
            );
            props.setSixthData("Done");
          },
          "Done Todos"
        )}

        {addButton(
          "nav_block-undone_todos",
          () => {
            props.setFifthData(
              props.thirdData.filter((item) => !item.isComplete)
            );
            props.setSixthData("Undone");
          },
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
      </ul>
    </nav>
  );
}

addNavigation.propTypes = {
  thirdData: PropTypes.array,
  setSecondData: PropTypes.func,
  setThirdData: PropTypes.func,
  setFourthData: PropTypes.func,
  setFifthData: PropTypes.func,
  setSixthData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    thirdData: store.thirdData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
    setSixthData: (data) => dispatch(actions.setSixthData(data)),
    setFourthData: (data) => dispatch(actions.setFourthData(data)),
    setFifthData: (data) => dispatch(actions.setFifthData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addNavigation);
