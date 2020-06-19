const actions = {
  setInputText: (data) => ({ type: "CHANGE_INPUT_TEXT_DATA", payload: data }),
  setIsShowTips: (data) => ({ type: "CHANGE_SHOW_TIPS_DATA", payload: data }),
  setTodoList: (data) => ({ type: "CHANGE_TODO_LIST_DATA", payload: data }),
  setDoneTodos: (data) => ({ type: "CHANGE_DONE_TODOS_DATA", payload: data }),
  setUndoneTodos: (data) => ({
    type: "CHANGE_UNDONE_TODOS_DATA",
    payload: data,
  }),
  setTodosType: (data) => ({ type: "CHANGE_TODOS_TYPE_DATA", payload: data }),
  setInputActiveClass: (data) => ({
    type: "CHANGE_INPUT_ACTIVE_CLASS_DATA",
    payload: data,
  }),
};
export default actions;
