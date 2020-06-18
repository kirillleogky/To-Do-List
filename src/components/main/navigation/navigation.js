import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

function addNavigation(props) {
  let allBorders = "del_all_borders";
  let undoneBorders = "del_undone_borders";
  if (props.sixthData === "All") {
    undoneBorders = "";
    allBorders = "del_all_borders";
  } else if (props.sixthData === "Undone") {
    allBorders = "";
    undoneBorders = "del_undone_borders";
  }
  function addButton(className, func, text) {
    let activeTodo = "";
    if (props.sixthData === text) {
      activeTodo = "active_nav_btn";
    }
    return (
      <li className={`${className} ${activeTodo}`}>
        <button type="button" onClick={func} className={`nav_btn btn-${text}`}>
          {text}
        </button>
      </li>
    );
  }
  return (
    <nav className="todos_block-main-nav nav_block">
      <ul className="nav_block-list">
        <div className="nav_block-list_todo_type">
          {addButton(
            `nav_block-list_todo_type_btn ${allBorders}`,
            () => props.setSixthData("All"),
            "All"
          )}

          {addButton(
            "nav_block-list_todo_type_btn",
            () => {
              props.setFourthData(
                props.thirdData.filter((item) => item.isComplete)
              );
              props.setSixthData("Done");
            },
            "Done"
          )}

          {addButton(
            `nav_block-list_todo_type_btn ${undoneBorders}`,
            () => {
              props.setFifthData(
                props.thirdData.filter((item) => !item.isComplete)
              );
              props.setSixthData("Undone");
            },
            "Undone"
          )}
        </div>
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
  sixthData: PropTypes.string,
  setSecondData: PropTypes.func,
  setThirdData: PropTypes.func,
  setFourthData: PropTypes.func,
  setFifthData: PropTypes.func,
  setSixthData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    thirdData: store.thirdData.data,
    sixthData: store.sixthData.data,
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
