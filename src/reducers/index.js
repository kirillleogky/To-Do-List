const first = {
  data: false,
};

const second = {
  data: JSON.parse(localStorage.getItem("todos")) || [],
};

const third = {
  data: [],
};

const fourth = {
  data: [],
};

const fifth = {
  data: "All",
};

const sixth = {
  data: "",
};

function isShowTips(state = first, action) {
  switch (action.type) {
    case "CHANGE_SHOW_TIPS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function todoList(state = second, action) {
  switch (action.type) {
    case "CHANGE_TODO_LIST_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function doneTodos(state = third, action) {
  switch (action.type) {
    case "CHANGE_DONE_TODOS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function undoneTodos(state = fourth, action) {
  switch (action.type) {
    case "CHANGE_UNDONE_TODOS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function todosType(state = fifth, action) {
  switch (action.type) {
    case "CHANGE_TODOS_TYPE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function inputActiveClass(state = sixth, action) {
  switch (action.type) {
    case "CHANGE_INPUT_ACTIVE_CLASS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default {
  isShowTips,
  todoList,
  doneTodos,
  undoneTodos,
  todosType,
  inputActiveClass,
};
