const first = {
  data: "",
};

const second = {
  data: false,
};

const third = {
  data: JSON.parse(localStorage.getItem("todos")) || [
    { label: "Wash Kitchen", isComplete: false },
    { label: "Go To Theater", isComplete: false },
  ],
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

function inputText(state = first, action) {
  switch (action.type) {
    case "CHANGE_INPUT_TEXT_DATA":
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
  inputText,
  isShowTips,
  todoList,
  doneTodos,
  undoneTodos,
  todosType,
  inputActiveClass,
};
