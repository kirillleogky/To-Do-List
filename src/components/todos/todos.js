import React from "react";
import PropTypes from "prop-types";
import CreateTodo from "../addTodoInput/createTodo";

export default function addTodos(props) {
  return (
    <ul className="todo_block-todos todos_block">
      <CreateTodo onDeleteTodo={props.onDeleteTodo} />
    </ul>
  );
}

addTodos.propTypes = {
  onDeleteTodo: PropTypes.func,
};
