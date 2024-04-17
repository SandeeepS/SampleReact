import React from 'react'
import './Todo.css'
import { useState } from 'react'

function Todo() {

    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([]);

    const handleSubmit = (e) => {
            e.preventDefault();
    }

    const addTodo = () => {
        setTodos([...todos,todo])
        console.log(todos);
    }
  return (
    <div className='container'>
        <h1>TODO APP</h1>
        <form action="" className='form-group' onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder='Enter you todo' className='form-control' onChange={(event)=> setTodo(event.target.value)} /> 
            
            <button onClick={addTodo}>ADD</button>
        </form>

        <div className='list'>
            <ul>
                <li className='form-control' >First</li>
                <li className='form-control' >Second</li>
                <li className='form-control' >third</li>
            </ul>
        </div>
    </div>
  )
}

export default Todo
