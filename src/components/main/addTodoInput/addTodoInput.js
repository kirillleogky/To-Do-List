import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../actions";

function addTodoInputBtn(props) {
  const inputNode = React.createRef();
  function changeInputLogo() {
    if (props.seventhData === "") {
      props.setSeventhData("_active");
      inputNode.current.focus();
      return;
    }
    props.setSeventhData("");
    props.setFirstData("");
  }
  return (
    <form
      onSubmit={(e) => {
        props.setSeventhData("");
        inputNode.current.blur();
        props.onAddTodo(e);
      }}
      className={`todo_block-add_todo add_todo_block add_todo_block${props.seventhData}`}
    >
      <div
        className={`add_todo_block-icon${props.seventhData}`}
        onClick={changeInputLogo}
      />
      <input
        ref={inputNode}
        autoComplete="off"
        type="text"
        placeholder="Add List"
        className="add_todo_block-input"
        id="input"
        value={props.firstData}
        onChange={(e) => props.setFirstData(e.target.value)}
        onClick={changeInputLogo}
      ></input>
      <button
        type="submit"
        className={`add_todo_block-btn add_todo_block-btn${props.seventhData}`}
      >
        <div>Add</div>
      </button>
    </form>
  );
}

addTodoInputBtn.propTypes = {
  firstData: PropTypes.string,
  secondData: PropTypes.bool,
  thirdData: PropTypes.array,
  seventhData: PropTypes.string,
  setFirstData: PropTypes.func,
  setThirdData: PropTypes.func,
  setSeventhData: PropTypes.func,
  onAddTodo: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    firstData: store.firstData.data,
    secondData: store.secondData.data,
    thirdData: store.thirdData.data,
    seventhData: store.seventhData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstData: (data) => dispatch(actions.setFirstData(data)),
    setSecondData: (data) => dispatch(actions.setSecondData(data)),
    setThirdData: (data) => dispatch(actions.setThirdData(data)),
    setSeventhData: (data) => dispatch(actions.setSeventhData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addTodoInputBtn);
