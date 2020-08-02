import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";
import "./App.scss";
import Head from "./components/head";
import Main from "./components/main";
import Auth from "./components/main/auth";
import onDragEnd from "./utils/onDragEnd";
import onFilterTodos from "./utils/filterTodos";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function App() {
  const state = useSelector((state) => state);
  const isShowTips = useSelector((state) => state.isShowTips.data);
  const todoList = useSelector((state) => state.todoList.data);
  const inputActiveClass = useSelector((state) => state.inputActiveClass.data);
  const isAuth = useSelector((state) => state.isAuth.data);
  const dispatch = useDispatch();

  // Initial Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDDrSWzQCjzpHlq77T3VYkut3vnxlQia4g",
    authDomain: "to-do-list-c0409.firebaseapp.com",
    databaseURL: "https://to-do-list-c0409.firebaseio.com",
    projectId: "to-do-list-c0409",
    storageBucket: "to-do-list-c0409.appspot.com",
    messagingSenderId: "219696490030",
    appId: "1:219696490030:web:74cd8b9bf880a97c7821bf",
  };
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  // Make Auth And Firestore References
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Create Current User Id
  let currentUser;

  auth.onAuthStateChanged((user) => {
    if (user && !isAuth) {
      dispatch(actions.setIsAuth(true));
    }
    if (user) {
      currentUser = user.uid;
    }
  });

  const filterTodos = onFilterTodos(state);
  function doneTodo(text) {
    const currIndex = todoList.findIndex((todo) => todo.label === text);
    const oldTodo = todoList[currIndex];
    const doneValue = !oldTodo.isComplete;
    const newTodoDone = { ...oldTodo, isComplete: doneValue };
    const todoStart = todoList.slice(0, currIndex);
    const todoEnd = todoList.slice(currIndex + 1);
    // Update All, Done, Undone Todos
    const { payload: newTodos } = dispatch(
      actions.setTodoList([...todoStart, newTodoDone, ...todoEnd])
    );
    dispatch(actions.setDoneTodos(newTodos.filter((item) => item.isComplete)));
    dispatch(
      actions.setUndoneTodos(newTodos.filter((item) => !item.isComplete))
    );
    // Update Firestore Field
    db.collection("todos")
      .doc(currentUser)
      .update({
        user: [...newTodos],
      });
  }

  function deleteTodo(text) {
    const delIndex = todoList.findIndex((todo) => todo.label === text);
    const todoStart = todoList.slice(0, delIndex);
    const todoEnd = todoList.slice(delIndex + 1);
    dispatch(actions.setTodoList([...todoStart, ...todoEnd]));
    // Update Firestore Field
    db.collection("todos")
      .doc(currentUser)
      .update({
        user: [...todoStart, ...todoEnd],
      });
  }

  function addTodo(event, inputNode) {
    const inputText = inputNode.current.value;
    event.preventDefault();
    const todo = { label: `${inputText}`, isComplete: false };
    dispatch(actions.setTodoList([todo, ...todoList]));
    inputNode.current.value = "";
    // Update Firestore Field
    db.collection("todos")
      .doc(currentUser)
      .update({
        user: [todo, ...todoList],
      });
  }

  // Looking at click on the page and if click is not performed on the button "Add",
  // input or input icon cleanup it does cleanup and blur
  function checkInput() {
    if (inputActiveClass !== "") {
      dispatch(actions.setInputActiveClass(""));
    }
  }

  // Set current todos into localStorage
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(todoList));

  return (
    <Fragment>
      <div
        id={`${isShowTips ? "focus_on_tips" : ""}`}
        className="todo_block"
        onClick={checkInput}
      >
        <header>
          <Head />
        </header>
        <main>
          {isAuth ? (
            <Main
              onAddTodo={addTodo}
              onDragEnd={(result) =>
                onDragEnd(result, filterTodos, state, dispatch)
              }
              onDeleteTodo={deleteTodo}
              onDoneTodo={doneTodo}
              todos={filterTodos}
            />
          ) : (
            <Auth />
          )}
        </main>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  isShowTips: PropTypes.bool,
  todoList: PropTypes.array,
  inputActiveClass: PropTypes.string,
};
