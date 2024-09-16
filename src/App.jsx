import './App.css'
import {useTodos} from "./custom-hooks/DataFetching"

function App() {
  const {todos, loading} = useTodos(5);

  if(loading){
    return <div>
      ..loading
    </div>
  }

  function Track({ todo }) {
    return <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

export default App