import React from "react";
import CreateTodo from "../addTodoInput/createTodo";

export default function addTodos() {
  return (
    <ul className="todo_block-todos todos_block">
      <CreateTodo />
    </ul>
  );
}
