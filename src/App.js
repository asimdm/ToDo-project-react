import "./App.css";
import {Provider} from 'react-redux';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="homePage">
        <h1 className="heading">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
