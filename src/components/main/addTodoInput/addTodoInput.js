import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

function addTodoInputBtn(props) {
  const inputNode = React.createRef();
  function changeInputLogo() {
    if (props.inputActiveClass === "") {
      props.setInputActiveClass("_active");
      inputNode.current.focus();
      return;
    }
    props.setInputActiveClass("");
    props.setInputText("");
  }
  return (
    <form
      onSubmit={(e) => {
        props.setInputActiveClass("");
        inputNode.current.blur();
        props.onAddTodo(e);
      }}
      className={`todo_block-add_todo add_todo_block add_todo_block${props.inputActiveClass}`}
    >
      <div
        className={`add_todo_block-icon${props.inputActiveClass}`}
        onClick={changeInputLogo}
      />
      <input
        ref={inputNode}
        autoComplete="off"
        type="text"
        placeholder="Add List"
        className="add_todo_block-input"
        id="input"
        value={props.inputText}
        onChange={(e) => props.setInputText(e.target.value)}
        onClick={changeInputLogo}
      ></input>
      <button
        type="submit"
        className={`add_todo_block-btn add_todo_block-btn${props.inputActiveClass}`}
      >
        <div>Add</div>
      </button>
    </form>
  );
}

addTodoInputBtn.propTypes = {
  inputText: PropTypes.string,
  inputActiveClass: PropTypes.string,
  setInputText: PropTypes.func,
  setInputActiveClass: PropTypes.func,
  onAddTodo: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    inputText: store.inputText.data,
    inputActiveClass: store.inputActiveClass.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInputText: (data) => dispatch(actions.setInputText(data)),
    setInputActiveClass: (data) => dispatch(actions.setInputActiveClass(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addTodoInputBtn);
