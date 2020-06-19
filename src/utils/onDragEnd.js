export default function onDragEnd(result, newTodos, data) {
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
  if (data.todosType === "Done") {
    data.setDoneTodos([...newTodos]);
  } else if (data.todosType === "Undone") {
    data.setUndoneTodos([...newTodos]);
  } else if (data.todosType === "All") {
    data.setTodoList([...newTodos]);
  }
}
