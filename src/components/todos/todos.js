import React from "react";
import PropTypes from "prop-types";
import CreateTodo from "./createTodo";
import { Droppable } from "react-beautiful-dnd";

export default function addTodos(props) {
  return (
    <Droppable droppableId="Todos">
      {(provided) => (
        <ul
          className="todo_block-todos todos_block"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {props.todos.map((elem, index) => (
            <CreateTodo
              onDeleteTodo={props.onDeleteTodo}
              onDoneTodo={props.onDoneTodo}
              todo={elem}
              index={index}
              key={index}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

addTodos.propTypes = {
  onDoneTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  todos: PropTypes.array,
};
