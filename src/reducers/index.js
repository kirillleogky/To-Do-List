const first = {
  data: false,
};

const second = {
  data: false,
};

const third = {
  data: JSON.parse(localStorage.getItem("todos")) || [],
};

const fourth = {
  data: [],
};

const fifth = {
  data: [],
};

const sixth = {
  data: "All",
};

const seventh = {
  data: "",
};

function isAuth(state = first, action) {
  switch (action.type) {
    case "CHANGE_AUTH_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function isShowTips(state = second, action) {
  switch (action.type) {
    case "CHANGE_SHOW_TIPS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function todoList(state = third, action) {
  switch (action.type) {
    case "CHANGE_TODO_LIST_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function doneTodos(state = fourth, action) {
  switch (action.type) {
    case "CHANGE_DONE_TODOS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function undoneTodos(state = fifth, action) {
  switch (action.type) {
    case "CHANGE_UNDONE_TODOS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function todosType(state = sixth, action) {
  switch (action.type) {
    case "CHANGE_TODOS_TYPE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

function inputActiveClass(state = seventh, action) {
  switch (action.type) {
    case "CHANGE_INPUT_ACTIVE_CLASS_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default {
  isAuth,
  isShowTips,
  todoList,
  doneTodos,
  undoneTodos,
  todosType,
  inputActiveClass,
};
