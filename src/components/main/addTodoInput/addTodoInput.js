import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";

export default function AddTodoInputBtn(props) {
  const inputText = useSelector((state) => state.inputText.data);
  const inputActiveClass = useSelector((state) => state.inputActiveClass.data);
  const dispatch = useDispatch();

  const inputNode = React.createRef();
  function changeInputLogo() {
    dispatch(actions.setInputText(""));
    if (inputActiveClass === "") {
      dispatch(actions.setInputActiveClass("_active"));
      inputNode.current.focus();
      return;
    }
    dispatch(actions.setInputActiveClass(""));
  }
  return (
    <form
      onSubmit={(e) => {
        dispatch(actions.setInputActiveClass(""));
        inputNode.current.blur();
        props.onAddTodo(e);
      }}
      className={`todo_block-add_todo add_todo_block add_todo_block${inputActiveClass}`}
    >
      <div
        className={`add_todo_block-icon${inputActiveClass}`}
        onClick={changeInputLogo}
      />
      <input
        ref={inputNode}
        autoComplete="off"
        type="text"
        placeholder="Add List"
        className="add_todo_block-input"
        id="input"
        value={inputText}
        onChange={(e) => dispatch(actions.setInputText(e.target.value))}
        onClick={changeInputLogo}
      ></input>
      <button
        type="submit"
        className={`add_todo_block-btn add_todo_block-btn${inputActiveClass}`}
      >
        <div>Add</div>
      </button>
    </form>
  );
}

AddTodoInputBtn.propTypes = {
  inputText: PropTypes.string,
  inputActiveClass: PropTypes.string,
  onAddTodo: PropTypes.func,
};
