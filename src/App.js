import './App.css';
import TodoBox from "./components/TodoBox";

function App() {

  const data = [
    {id: 'todo-0', name: 'Read' },
    {id: 'todo-1', name: 'Chill'},
    {id: 'todo-2', name: 'Repeat'}
  ]
  return (
   <TodoBox tasks={data}/>
  );
}

export default App;
