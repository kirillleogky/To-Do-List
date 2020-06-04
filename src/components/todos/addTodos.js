import React from "react"

export default function addTodos() {
  return (
    <ul className="todo_block-todos todos_block">
      <li>
        <span className="todos_block-text">Wash Kitchen</span>
        <span className="todos_block-trash"></span>
      </li>
      <li>
        <span className="todos_block-text">Go To Theater</span>
        <span className="todos_block-trash"></span>
      </li>
    </ul>
  )
}
