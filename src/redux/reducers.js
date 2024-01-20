const initialState = {
    tasks: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
          ),
        };
        case 'COMPLETE_TASK':
            return{
                ...state,
                tasks:state.tasks.map((task)=>
                    task.id===action.payload ? {...task, completed:!task.completed}: task
            ),};
      default:
        return state;
    }
  };
  
  export default rootReducer;
  