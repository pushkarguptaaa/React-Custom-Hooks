import './App.css'
import { useOnline, useMousePointer} from './custom-hooks/BrowserFunctionality';
import {useTodos} from "./custom-hooks/DataFetching"

function App() {
  const {todos, loading} = useTodos(5);
  const mousePointer = useMousePointer()

  // const isOnline = useOnline()
  

  // if(loading){
  //   return <div>
  //     ..loading
  //   </div>
  // }

  // if(isOnline) return "You are online"
  
  // return "You are offline"

  function Track({ todo }) {
    return <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  }


  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

export default App