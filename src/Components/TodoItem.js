import React, { Component } from 'react';
import TodoText from './TodoText';

class TodoItem extends Component {
  componentWillUnmount() {
    console.log('TodoItem will unmount');
  }

  render() {
    const { text, handleDelete, handleComplete, handleEdit } = this.props;
    return(
        <div>
            <button onClick={handleComplete}>Complete</button>
            <button
              onClick={() =>
                handleEdit(prompt('Edit : '),text)
              }>
              Edit
            </button>
            <button onClick={handleDelete}>Delete</button>   
        </div>
    )
  }
}

export default TodoItem;
