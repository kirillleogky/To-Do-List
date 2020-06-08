import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function createTodo(props) {
  return props.thirdData.map((elem, index) => (
    <li key={index}>
      <span className="todos_block-text">{elem.label}</span>
      <button
        className="todos_block-trash"
        onClick={() => props.onDeleteTodo(elem.label)}
      >
        x
      </button>
    </li>
  ));
}

createTodo.propTypes = {
  thirdData: PropTypes.array,
};

const mapStateToProps = (store) => {
  return {
    thirdData: store.thirdData.data,
  };
};

export default connect(mapStateToProps)(createTodo);
