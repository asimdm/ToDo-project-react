export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: { id: Date.now(), text , completed:false},
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });

  export const completeTask = (id) =>({
    type: 'COMPLETE_TASK',
    payload: id,
  })
  
  export const editTask = (id, newText) => ({
    type: 'EDIT_TASK',
    payload: { id, newText , completed:false},
  });
  