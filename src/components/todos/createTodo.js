import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

function createTodo(props) {
  const elem = props.todo;
  const index = props.index;
  return (
    <Draggable draggableId={`draggable_todo_${index}`} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span
            className={`todos_block-text ${
              elem.isComplete ? "todos_block-text_done" : ""
            }`}
          >
            {elem.label}
          </span>
          <button
            className="todos_block-trash"
            onClick={() => props.onDeleteTodo(elem.label)}
          >
            x
          </button>
          <button
            className="todos_block-done"
            onClick={() => props.onDoneTodo(elem.label)}
          >
            ✓
          </button>
        </li>
      )}
    </Draggable>
  );
}

createTodo.propTypes = {
  thirdData: PropTypes.array,
  todo: PropTypes.object,
  index: PropTypes.number,
  onDeleteTodo: PropTypes.func,
  onDoneTodo: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    thirdData: store.thirdData.data,
  };
};

export default connect(mapStateToProps)(createTodo);
