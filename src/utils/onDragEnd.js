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
  if (data.sixthData === "Done") {
    data.setFourthData([...newTodos]);
  } else if (data.sixthData === "Undone") {
    data.setFifthData([...newTodos]);
  } else if (data.sixthData === "All") {
    data.setThirdData([...newTodos]);
  }
}
