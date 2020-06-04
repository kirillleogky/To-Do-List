import React from "react"

export default function addOverlay() {
  return (
    <div className="todos_block-overlay overlay_block">
      <button className="overlay_block-close_tips">?</button>
      <ul className="overlay_block-tips">
        <li>To hide or show the input field, click on the button</li>
        <li>
          To add a to-do list, write text in the input field and press Enter or
          the button on the right
        </li>
        <li>
          To delete one item, hover over it and click on the trash can icon
        </li>
        <li>To delete all to-do lists, click &quot;Clear&quot;</li>
        <li>Click &quot;Save&quot; to save the to-do list</li>
      </ul>
    </div>
  )
}
