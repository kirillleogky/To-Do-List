import actions from "../actions";

export default function onDragEnd(result, newTodos, data, dispatch) {
  const { draggableId, source, destination } = result;
  if (!destination) {
    return;
  }
  if (
    draggableId.droppableId === source.droppableId &&
    draggableId.index === source.index
  ) {
    return;
  }
  const oldTodo = newTodos.splice(source.index, 1);
  newTodos.splice(destination.index, 0, oldTodo[0]);
  if (data.todosType.data === "Done") {
    dispatch(actions.setDoneTodos([...newTodos]));
  } else if (data.todosType.data === "Undone") {
    dispatch(actions.setUndoneTodos([...newTodos]));
  } else if (data.todosType.data === "All") {
    dispatch(actions.setTodoList([...newTodos]));
  }
}
