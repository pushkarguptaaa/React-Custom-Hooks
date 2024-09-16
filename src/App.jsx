import { useState } from 'react';
import './App.css'
import { useOnline, useMousePointer} from './custom-hooks/BrowserFunctionality';
import {useTodos} from "./custom-hooks/DataFetching"
import { useDebounce, useInterval } from './custom-hooks/PerformanceBased';

function App() {
  const {todos, loading} = useTodos(5);
  const mousePointer = useMousePointer()
  const [cnt, setcnt] = useState(0)
  const [input, setinput] = useState("")
  const debounced = useDebounce(input, 500)

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

  useInterval(()=>{
    setcnt(c => c+1)
  }, 1000)


  return (
    <>
      <input type="text" onChange={e => setinput(e.target.value)} /> <br />
      Normal text: {input} <br />
      Debounced text: {debounced} <br />
      count is {cnt} <br />
      Your mouse position is {mousePointer.x} {mousePointer.y}
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

export default App