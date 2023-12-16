import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault(); //tna7i refresh mta3 form
    console.log("value : ", value);
    addTodo(value);
    setValue(""); //el value lezemha tarja3 lel vide mba3d ma ne5dhou el task
  } 

  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
      <input type="text" placeholder="What to do ?" className="todo-input" value={value}
        onChange={(e) => {console.log("e.target.value : ", e.target.value);
                          setValue(e.target.value); }}/>
      <button type="submit" className="todo-btn">Add</button>
    </form>
  );
};

export default TodoForm;