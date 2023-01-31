import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import TotalCompleteItems from "./Components/TotalCompleteItems";
function App() {
  return (
    <div className="todo">
      <div className="container">
      <h1>My Todo List </h1>
      <AddTodo />
      <TodoList />
      <TotalCompleteItems /> 
      </div>
    </div>
  );
}

export default App;


