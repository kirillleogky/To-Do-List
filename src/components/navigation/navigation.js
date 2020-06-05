import React from "react";

export default function addNavigation() {
  return (
    <nav className="todos_block-nav nav_block">
      <ul className="nav_block-list">
        <li>
          <button className="nav_block-save">Save</button>
        </li>
        <li>
          <button className="nav_block-clear">Clear</button>
        </li>
        <li>
          <button className="nav_block-showTips">Tips</button>
        </li>
      </ul>
    </nav>
  );
}
