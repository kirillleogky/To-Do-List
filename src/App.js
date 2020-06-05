import React, { Fragment } from "react";
import "./App.scss";
import Overlay from "./components/overlay/overlay";
import AddTodoInput from "./components/addTodoInput/addTodoInput";
import AddTodos from "./components/todos/addTodos";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <Fragment>
      <div id="todo" className="todo_block">
        <h1 className="todo_block-title">
          To Do List
          <i id="pensil" className="todo_block-title_img"></i>
        </h1>
        <AddTodoInput />
        <AddTodos />
        <Navigation />
      </div>
      <Overlay />
    </Fragment>
  );
}

export default App;
