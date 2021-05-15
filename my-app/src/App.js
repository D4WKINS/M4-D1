import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList'
//stores all states of our Todos
// Used state returns an array
function App() {
  const [todos, setTodos] = useState(['Todo 1','Todo 2'])//Object destructuring, the first variable todos, represents every single one of the todos inside of our todo state,
                                        // and the 2nd is the function we call to update the todos
  return (// you cannot put two jsx elements next to each as it can only return one thing, wrapping inside a fragment '<>' allows us to return one thing which contains two jsx elements
    <> 
      <TodoList todos={todos} />
      <input type="text" />
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;

{/* <TodoList /> This renders our component in the browsers */}