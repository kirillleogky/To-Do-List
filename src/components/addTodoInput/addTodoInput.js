import React from "react"

export default function addTodo() {
  return (
    <div className="todo_block-add_todo add_todo_block">
      <input
        type="text"
        placeholder="Add List"
        className="add_todo_block-input"
      ></input>
      <button className="add_todo_block-btn">Add</button>
    </div>
  )
}
