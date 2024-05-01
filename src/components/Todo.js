import React from "react";
import "./Todo.css";
import { useState, useRef, useEffect } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editid, setEditId] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showError2, setShowError2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (todo.trim() === "") {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    console.log(todos);
    const isExist = todos.find((list) => list.list === todo);
    console.log("if exist?" + isExist);
    if (isExist) {
      setShowError2(true);
      setTimeout(() => {
        setShowError2(false);
      }, 3000);
      return;
    }

    if (todo !== " ") {
      if (editid) {
        const updatedTodos = todos.map((todoItem) => {
          if (todoItem.id === editid) {
            return { ...todoItem, list: todo, status: todoItem.status };
          }
          return todoItem;
        });
        setTodos(updatedTodos);
        setEditId(0);
      } else {
        console.log("todo value is " + todo);
        setTodos([{ list: todo, id: Date.now(), status: false }, ...todos]);
      }
      console.log("making empty");
      setTodo("");
    }
  };

  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  //function to delete the list
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //function to complete
  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(complete);
  };

  //function to edit
  const onEdit = (id) => {
    const editedList = todos.find((list) => list.id === id);
    setTodo(editedList.list);
    setEditId(editedList.id);
  };

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={todo}
          placeholder="Enter you todo"
          className="form-control"
          onChange={(event) => setTodo(event.target.value)}
        />

        <button onClick={addTodo}>{editid ? "EDIT" : "ADD"}</button>
      </form>

      <div className="list">
        {showError && (
          <div className="error-message"> Please enter a valid todo ! </div>
        )}
        {showError2 && (
          <div className="error-message"> List already exist </div>
        )}
        <ul>
          {todos.map((todo) => (
            <li className="list-items" key={todo.id}>
              <div
                className="list-item-list"
                id={todo.status ? "list-item" : ""}
              >
                {todo.list}
              </div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                  onClick={() => onComplete(todo.id)}
                />
                <FiEdit
                  className="list-item-icons"
                  id="edit"
                  title="Edit"
                  onClick={() => onEdit(todo.id)}
                />
                <MdDelete
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={() => onDelete(todo.id)}
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
