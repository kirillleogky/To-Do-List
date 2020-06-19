import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

export default function createTodo(props) {
  const elem = props.todo;
  const index = props.index;
  return (
    <Draggable draggableId={`draggable_todo_${index}`} index={index}>
      {(provided, snapshot) => {
        const draggableElem = snapshot.isDragging ? "draggable_todo" : "";
        return (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`todos_block-todo ${draggableElem}`}
          >
            <div
              className={`todos_block-icon ${
                elem.isComplete ? "todos_block-icon_done" : ""
              }`}
              onClick={() => props.onDoneTodo(elem.label)}
            />
            <span
              className={`todos_block-text ${
                elem.isComplete ? "todos_block-text_done" : ""
              }`}
            >
              {elem.label}
            </span>
            <div
              className="todos_block-trash"
              onClick={() => props.onDeleteTodo(elem.label)}
            />
            <div className="todos_block-dnd" {...provided.dragHandleProps} />
          </li>
        );
      }}
    </Draggable>
  );
}

createTodo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  onDeleteTodo: PropTypes.func,
  onDoneTodo: PropTypes.func,
};
