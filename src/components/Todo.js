import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos([...todos, {list:todo,id : Date.now()}]);
    console.log(todos);
    setTodo("");
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

 const onDelete = (id) => {
   setTodos( todos.filter((todo)=> todo.id !== id) )
 }

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          ref={inputRef}
          placeholder="Enter you todo"
          className="form-control"
          onChange={(event) => setTodo(event.target.value)}
        />

        <button onClick={addTodo}>ADD</button>
      </form>

      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li className="list-items">
              <div className="list-item-list">{todo.list}</div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                />
                <FiEdit className="list-item-icons" id="edit" title="Edit" />
                <MdDelete
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={()=> onDelete(todo.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
