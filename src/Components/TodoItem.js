import React, { Component } from "react";
import { FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

class TodoItem extends Component {
  componentWillUnmount() {
    console.log("TodoItem will unmount");
  }

  render() {
    const { text, handleDelete, handleComplete, handleEdit } = this.props;
    return (
      <div style={{display:"flex", justifyContent:"center"}}>
        <TiTick className="actionButton" onClick={handleComplete} />
        <FaEdit
          className="actionButton"
          onClick={() => handleEdit(prompt("Edit : "), text)}
        />
        <MdDelete className="actionButton" onClick={handleDelete} />
      </div>
    );
  }
}

export default TodoItem;
