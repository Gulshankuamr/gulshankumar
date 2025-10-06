import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {

let saveTask=(e)=>{
  let [todolist, setTodolist]=React.useState([]);

let todoname= e.target.todoname.value;
alert(todoname);
  e.preventDefault();
}



  return (
    <div className='App'>
        <h1>To-Do-App</h1>
        <form onSubmit={saveTask}>
            <input type="text"  name="todoname" placeholder='Enter your task' />
            <button>Add Task</button>
        </form>


    </div>
  )
}

export default App