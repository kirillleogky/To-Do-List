import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import actions from "./actions";
import "./App.scss";
import Overlay from "./components/overlay/overlay";
import AddTodoInput from "./components/addTodoInput/addTodoInput";
import AddTodos from "./components/todos/addTodos";
import Navigation from "./components/navigation/navigation";

function App(props) {
  return (
    <Fragment>
      <div id="todo" className="todo_block">
        <h1 className="todo_block-title">
          To Do List
          <i id="pensil" className="todo_block-title_img">
            by {props.firstData}
          </i>
          <button
            type="button"
            onClick={() => props.setFirstData("Kirillio")}
          ></button>
        </h1>
        <AddTodoInput />
        <AddTodos />
        <Navigation />
      </div>
      <Overlay />
    </Fragment>
  );
}

App.propTypes = {
  firstData: PropTypes.string,
  secondData: PropTypes.object,
  thirdData: PropTypes.array,
  setFirstData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    firstData: store.firstData.data,
    secondData: store.secondData.data,
    thirdData: store.thirdData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstData: (data) => dispatch(actions.setFirstData(data)),
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
