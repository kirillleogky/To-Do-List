import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";

function addTodoInputBtn(props) {
  return (
    <form
      onSubmit={() => props.onAddTodo()}
      className="todo_block-add_todo add_todo_block"
    >
      <input
        type="text"
        placeholder="Add List"
        className="add_todo_block-input"
        id="input"
        value={props.firstData}
        onChange={(e) => props.setFirstData(e.target.value)}
      ></input>
      <button type="submit" className="add_todo_block-btn">
        Add
      </button>
    </form>
  );
}

addTodoInputBtn.propTypes = {
  firstData: PropTypes.string,
  secondData: PropTypes.object,
  thirdData: PropTypes.array,
  setFirstData: PropTypes.func,
  setThirdData: PropTypes.func,
  onAddTodo: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(addTodoInputBtn);
