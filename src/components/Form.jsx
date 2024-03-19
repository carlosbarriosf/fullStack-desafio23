import React, { useState } from 'react'
import Button from './Button'

function Form({onSubmit}) {

  const [taskNameInput, setTaskNameInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    if(taskNameInput === "") return
    onSubmit(taskNameInput)
    setTaskNameInput("")
  }

  return (
    <form onSubmit={handleSubmit} action="" className='taskInput__form'>
      <label htmlFor='taskInput' hidden></label>
      <input 
        type='text' 
        name='taskInput' 
        placeholder='Nombre de la tarea'
        className='taskInput__name' 
        value={taskNameInput} 
        onChange={(e) => setTaskNameInput(e.target.value)}
      />
      <Button type='submit' label='Añadir' className='taskInput__submit'/>
    </form>
  )
}

export default Form