import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({todo, toggleCompleteFct, deleteTask }) => {
  return (
    <div className="Todo">
      <p className={`${todo.completed ? "completed" : "incompleted"}`} onClick={() => toggleCompleteFct(todo.id)}>{todo.task}</p>
      <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTask(todo.id)}/>
    </div>
  )
}

export default Todo;