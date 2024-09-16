import { useState, useEffect } from 'react'
import axios from 'axios';

function useTodos(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
  
    function getData(){
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false)
        })
    }
  
    useEffect(() => {
      const int = setInterval(() => {
        getData()
      }, n * 1000)
      getData()
  
      return () => {
        clearInterval(int)
      }
    }, [n])
  
    return {todos, loading};
  }


export {useTodos}

