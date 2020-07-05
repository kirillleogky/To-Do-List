export default function filterTodos(data) {
  if (data.todosType.data === "Done") {
    return data.doneTodos.data;
  } else if (data.todosType.data === "Undone") {
    return data.undoneTodos.data;
  } else if (data.todosType.data === "All") {
    return data.todoList.data;
  }
}
