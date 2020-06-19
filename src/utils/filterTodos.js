export default function filterTodos(data) {
  if (data.todosType === "Done") {
    return data.doneTodos;
  } else if (data.todosType === "Undone") {
    return data.undoneTodos;
  } else if (data.todosType === "All") {
    return data.todoList;
  }
}
