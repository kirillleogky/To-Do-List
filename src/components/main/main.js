import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import AddTodoInput from "./addTodoInput";
import AddTodos from "./todos";
import Navigation from "./navigation";

export default function Main(props) {
  return (
    <div className="todo_block-main">
      <Navigation />
      <AddTodoInput onAddTodo={props.onAddTodo} />
      <DragDropContext onDragEnd={props.onDragEnd}>
        <AddTodos
          onDeleteTodo={props.onDeleteTodo}
          onDoneTodo={props.onDoneTodo}
          todos={props.todos}
        />
      </DragDropContext>
    </div>
  );
}

Main.propTypes = {
  onAddTodo: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onDoneTodo: PropTypes.func,
  todos: PropTypes.array,
};
