import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "./actions";
import "./App.scss";
import Head from "./components/head";
import Main from "./components/main";
import onDragEnd from "./utils/onDragEnd";
import onFilterTodos from "./utils/filterTodos";

function App(props) {
  const filterTodos = onFilterTodos(props);
  function doneTodo(text) {
    const currIndex = props.todoList.findIndex((todo) => todo.label === text);
    const oldTodo = props.todoList[currIndex];
    const doneValue = !oldTodo.isComplete;
    const newTodoDone = { ...oldTodo, isComplete: doneValue };
    const todoStart = props.todoList.slice(0, currIndex);
    const todoEnd = props.todoList.slice(currIndex + 1);
    // Update All, Done, Undone Todos
    const { payload: newTodos } = props.setTodoList([
      ...todoStart,
      newTodoDone,
      ...todoEnd,
    ]);
    props.setDoneTodos(newTodos.filter((item) => item.isComplete));
    props.setUndoneTodos(newTodos.filter((item) => !item.isComplete));
  }

  function deleteTodo(text) {
    const delIndex = props.todoList.findIndex((todo) => todo.label === text);
    const todoStart = props.todoList.slice(0, delIndex);
    const todoEnd = props.todoList.slice(delIndex + 1);
    props.setTodoList([...todoStart, ...todoEnd]);
  }

  function addTodo(event) {
    event.preventDefault();
    const todo = { label: `${props.inputText}`, isComplete: false };
    props.setTodoList([todo, ...props.todoList]);
    props.setInputText("");
  }

  // Looking at click on the page and if click is not performed on the button "Add",
  // input or input icon cleanup it does cleanup and blur
  function checkInput() {
    if (props.inputActiveClass !== "") {
      props.setInputActiveClass("");
      props.setInputText("");
    }
  }

  // Set current todos into localStorage
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(props.todoList));

  return (
    <Fragment>
      <div
        id={`${props.isShowTips ? "focus_on_tips" : ""}`}
        className="todo_block"
        onClick={checkInput}
      >
        <header>
          <Head />
        </header>
        <main>
          <Main
            onAddTodo={addTodo}
            onDragEnd={(result) => onDragEnd(result, filterTodos, props)}
            onDeleteTodo={deleteTodo}
            onDoneTodo={doneTodo}
            todos={filterTodos}
          />
        </main>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  inputText: PropTypes.string,
  isShowTips: PropTypes.bool,
  todoList: PropTypes.array,
  doneTodos: PropTypes.array,
  undoneTodos: PropTypes.array,
  todosType: PropTypes.string,
  setInputText: PropTypes.func,
  setTodoList: PropTypes.func,
  setDoneTodos: PropTypes.func,
  setUndoneTodos: PropTypes.func,
  setInputActiveClass: PropTypes.func,
  inputActiveClass: PropTypes.string,
};

const mapStateToProps = (store) => {
  return {
    inputText: store.inputText.data,
    isShowTips: store.isShowTips.data,
    todoList: store.todoList.data,
    doneTodos: store.doneTodos.data,
    undoneTodos: store.undoneTodos.data,
    todosType: store.todosType.data,
    inputActiveClass: store.inputActiveClass.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInputText: (data) => dispatch(actions.setInputText(data)),
    setTodoList: (data) => dispatch(actions.setTodoList(data)),
    setDoneTodos: (data) => dispatch(actions.setDoneTodos(data)),
    setUndoneTodos: (data) => dispatch(actions.setUndoneTodos(data)),
    setInputActiveClass: (data) => dispatch(actions.setInputActiveClass(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
