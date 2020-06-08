import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";

function createTodo(props) {
  function deleteTodo(text) {
    const delIndex = props.thirdData.findIndex((todo) => todo.label === text);
    const todoStart = props.thirdData.slice(0, delIndex);
    const todoEnd = props.thirdData.slice(delIndex + 1);
    props.setThirdData([...todoStart, ...todoEnd]);
  }
  return props.thirdData.map((elem, index) => (
    <li key={index}>
      <span className="todos_block-text">{elem.label}</span>
      <button
        className="todos_block-trash"
        onClick={() => deleteTodo(elem.label)}
      >
        x
      </button>
    </li>
  ));
}

createTodo.propTypes = {
  thirdData: PropTypes.array,
  setThirdData: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    thirdData: store.thirdData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(createTodo);
