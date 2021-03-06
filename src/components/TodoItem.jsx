import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, id, handleDelete } = this.props;
    console.log(handleDelete);
    return (
      <div className="TodoItem">
        <li className="list">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span>
              <i className="fas fa-pen"></i>
            </span>
            <span>
              <i className="fas fa-trash" onClick={handleDelete}></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
