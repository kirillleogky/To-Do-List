import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

function addNavigation(props) {
  let allBorders = "del_all_borders";
  let undoneBorders = "del_undone_borders";
  if (props.todosType === "All") {
    undoneBorders = "";
    allBorders = "del_all_borders";
  } else if (props.todosType === "Undone") {
    allBorders = "";
    undoneBorders = "del_undone_borders";
  }
  function addButton(className, func, text) {
    let activeTodo = "";
    if (props.todosType === text) {
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
            () => props.setTodosType("All"),
            "All"
          )}

          {addButton(
            "nav_block-list_todo_type_btn",
            () => {
              props.setDoneTodos(
                props.todoList.filter((item) => item.isComplete)
              );
              props.setTodosType("Done");
            },
            "Done"
          )}

          {addButton(
            `nav_block-list_todo_type_btn ${undoneBorders}`,
            () => {
              props.setUndoneTodos(
                props.todoList.filter((item) => !item.isComplete)
              );
              props.setTodosType("Undone");
            },
            "Undone"
          )}
        </div>
        {addButton(
          "nav_block-clear",
          () => {
            localStorage.clear();
            props.setTodoList([]);
          },
          "Clear"
        )}
      </ul>
    </nav>
  );
}

addNavigation.propTypes = {
  todoList: PropTypes.array,
  todosType: PropTypes.string,
  setTodoList: PropTypes.func,
  setDoneTodos: PropTypes.func,
  setUndoneTodos: PropTypes.func,
  setTodosType: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    todoList: store.todoList.data,
    todosType: store.todosType.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (data) => dispatch(actions.setTodoList(data)),
    setDoneTodos: (data) => dispatch(actions.setDoneTodos(data)),
    setUndoneTodos: (data) => dispatch(actions.setUndoneTodos(data)),
    setTodosType: (data) => dispatch(actions.setTodosType(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addNavigation);
