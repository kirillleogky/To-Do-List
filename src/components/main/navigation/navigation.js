import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";

export default function AddNavigation() {
  const todoList = useSelector((state) => state.todoList.data);
  const todosType = useSelector((state) => state.todosType.data);
  const dispatch = useDispatch();

  let allBorders = "del_all_borders";
  let undoneBorders = "del_undone_borders";
  if (todosType === "All") {
    undoneBorders = "";
    allBorders = "del_all_borders";
  } else if (todosType === "Undone") {
    allBorders = "";
    undoneBorders = "del_undone_borders";
  }
  function addButton(className, func, text) {
    let activeTodo = "";
    if (todosType === text) {
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
            () => dispatch(actions.setTodosType("All")),
            "All"
          )}

          {addButton(
            "nav_block-list_todo_type_btn",
            () => {
              dispatch(
                actions.setDoneTodos(todoList.filter((item) => item.isComplete))
              );
              dispatch(actions.setTodosType("Done"));
            },
            "Done"
          )}

          {addButton(
            `nav_block-list_todo_type_btn ${undoneBorders}`,
            () => {
              dispatch(
                actions.setUndoneTodos(
                  todoList.filter((item) => !item.isComplete)
                )
              );
              dispatch(actions.setTodosType("Undone"));
            },
            "Undone"
          )}
        </div>
        {addButton(
          "nav_block-clear",
          () => {
            localStorage.clear();
            dispatch(actions.setTodoList([]));
          },
          "Clear"
        )}
      </ul>
    </nav>
  );
}

AddNavigation.propTypes = {
  todoList: PropTypes.array,
  todosType: PropTypes.string,
};
