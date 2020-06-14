import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "./actions";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.scss";
import Head from "./components/head/head";
import AddTodoInput from "./components/addTodoInput/addTodoInput";
import AddTodos from "./components/todos/todos";
import Navigation from "./components/navigation/navigation";
import onDragEnd from "./utils/onDragEnd";
import onFilterTodos from "./utils/filterTodos";

function App(props) {
  const filterTodos = onFilterTodos(props);
  function doneTodo(text) {
    const currIndex = props.thirdData.findIndex((todo) => todo.label === text);
    const oldTodo = props.thirdData[currIndex];
    const doneValue = !oldTodo.isComplete;
    const newTodoDone = { ...oldTodo, isComplete: doneValue };
    const todoStart = props.thirdData.slice(0, currIndex);
    const todoEnd = props.thirdData.slice(currIndex + 1);
    // Update All, Done, Undone Todos
    const { payload: newTodos } = props.setThirdData([
      ...todoStart,
      newTodoDone,
      ...todoEnd,
    ]);
    props.setFourthData(newTodos.filter((item) => item.isComplete));
    props.setFifthData(newTodos.filter((item) => !item.isComplete));
  }

  function deleteTodo(text) {
    const delIndex = props.thirdData.findIndex((todo) => todo.label === text);
    const todoStart = props.thirdData.slice(0, delIndex);
    const todoEnd = props.thirdData.slice(delIndex + 1);
    props.setThirdData([...todoStart, ...todoEnd]);
  }

  function addTodo(event) {
    event.preventDefault();
    const todo = {
      label: `${props.firstData}`,
      isComplete: false,
    };
    props.setThirdData([...props.thirdData, todo]);
    props.setFirstData("");
  }

  return (
    <Fragment>
      <div
        id={`${props.secondData ? "focus_on_tips" : ""}`}
        className="todo_block"
      >
        <header>
          <Head />
        </header>
        <main>
          <Navigation />
          <AddTodoInput onAddTodo={addTodo} />
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, filterTodos, props)}
          >
            <AddTodos
              onDeleteTodo={deleteTodo}
              onDoneTodo={doneTodo}
              todos={filterTodos}
            />
          </DragDropContext>
        </main>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  firstData: PropTypes.string,
  secondData: PropTypes.bool,
  thirdData: PropTypes.array,
  fourthData: PropTypes.array,
  fifthData: PropTypes.array,
  sixthData: PropTypes.string,
  setFirstData: PropTypes.func,
  setThirdData: PropTypes.func,
  setFourthData: PropTypes.func,
  setFifthData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    firstData: store.firstData.data,
    secondData: store.secondData.data,
    thirdData: store.thirdData.data,
    fourthData: store.fourthData.data,
    fifthData: store.fifthData.data,
    sixthData: store.sixthData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstData: (data) => dispatch(actions.setFirstData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
    setFourthData: (data) => dispatch(actions.setFourthData(data)),
    setFifthData: (data) => dispatch(actions.setFifthData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
