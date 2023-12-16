import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodo);
  }, [])
  


  const addTodo = (todo) => {
    const newTodos = [...todos, {id: uuidv4(), task:todo, completed:false}]; //...todos : les todos le9dom + todo e jdid
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  
  const toggleCompleteFct = (id)=> {
    const newTodos = todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
};

const deleteTask = (id) => {
    const newTodos = todos.filter((todoElement) => todoElement.id !== id); //jibli tous les id a part l'id selectionné
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
};

  return (
    <div className="TodoWrapper">
        <h1>Todo</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            <Todo todo={todo} key={index} toggleCompleteFct={toggleCompleteFct} deleteTask={deleteTask}/> 
        ))}
        
    </div>
  )
};

export default TodoWrapper;