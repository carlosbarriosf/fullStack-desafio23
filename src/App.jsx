
import './App.css';
import './styles/titles.css'
import './styles/form.css'
import './styles/buttons.css'
import Form from './components/Form';
import Title from './components/Title'
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos')
    if(!storedTodos) return []
    return JSON.parse(storedTodos)
  })
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]) 

  function addTodo(taskNameInput) {
    setTodos((currentTodos) => {
      setUserId(userId + 1)
      return [...currentTodos, {id: userId, taskName: taskNameInput}]
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }



  return (
    <div className="App">
        <Title renderAs='h1' content='Lista de tareas'/>
        <Form onSubmit={addTodo} />
        <TaskList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
