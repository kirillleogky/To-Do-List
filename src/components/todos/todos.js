import React from "react";
import PropTypes from "prop-types";
import CreateTodo from "../addTodoInput/createTodo";

export default function addTodos(props) {
  return (
    <ul className="todo_block-todos todos_block">
      <CreateTodo
        onDeleteTodo={props.onDeleteTodo}
        onDoneTodo={props.onDoneTodo}
      />
    </ul>
  );
}

addTodos.propTypes = {
  onDoneTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};
