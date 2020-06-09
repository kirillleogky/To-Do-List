import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "./actions";
import "./App.scss";
import Overlay from "./components/overlay/overlay";
import AddTodoInput from "./components/addTodoInput/addTodoInput";
import AddTodos from "./components/todos/todos";
import Navigation from "./components/navigation/navigation";

function App(props) {
  function doneTodo(text) {
    const currIndex = props.thirdData.findIndex((todo) => todo.label === text);
    const oldTodo = props.thirdData[currIndex];
    const doneValue = !oldTodo.isComplete;
    const newTodoDone = { ...oldTodo, isComplete: doneValue };
    const todoStart = props.thirdData.slice(0, currIndex);
    const todoEnd = props.thirdData.slice(currIndex + 1);
    props.setThirdData([...todoStart, newTodoDone, ...todoEnd]);
  }

  function deleteTodo(text) {
    const delIndex = props.thirdData.findIndex((todo) => todo.label === text);
    const todoStart = props.thirdData.slice(0, delIndex);
    const todoEnd = props.thirdData.slice(delIndex + 1);
    props.setThirdData([...todoStart, ...todoEnd]);
  }

  function addTodo() {
    const todo = {
      label: `${props.firstData}`,
      isComplete: false,
    };
    props.setThirdData([...props.thirdData, todo]);
    props.setFirstData("");
  }

  return (
    <Fragment>
      <div id="todo" className="todo_block">
        <h1 className="todo_block-title">
          To Do List
          <i id="pensil" className="todo_block-title_img"></i>
        </h1>
        <AddTodoInput onAddTodo={addTodo} />
        <AddTodos onDeleteTodo={deleteTodo} onDoneTodo={doneTodo} />
        <Navigation />
      </div>
      <Overlay />
    </Fragment>
  );
}

App.propTypes = {
  firstData: PropTypes.string,
  thirdData: PropTypes.array,
  setFirstData: PropTypes.func,
  setThirdData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    firstData: store.firstData.data,
    thirdData: store.thirdData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstData: (data) => dispatch(actions.setFirstData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
