import '../styles/taskList.css'
import React from 'react'
import Task from './Task'

function TaskList({todos, deleteTodo}) {
    console.log(todos)
  return (
    <div className='list-container'>
        <ul className='list'>
            {todos.map(todo => {
                return (        
                    <Task taskName={todo.taskName} key={todo.id} deleteTodo={deleteTodo} id={todo.id}/>
                )
            })}
        </ul>
    </div>
  )
}

export default TaskList