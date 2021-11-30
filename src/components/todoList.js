import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../styles.css'
import { useDispatch } from 'react-redux'
import ColorSelect from './colorSelect'
const selectTodos = (state) => state.todos
const TodoList = () => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const handleComplete = (id) => {
    dispatch({ type: 'todos/todoToggled', payload: id })
  }
  const handleDelete = (id) => {
    dispatch({ type: 'todos/todoDeleted', payload: id })
  }

  return (
    <div className="todos-box">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'todo-complete' : ''}`}
            >
              <p onClick={() => handleComplete(todo.id)}>{todo.text}</p>
              <div style={{ display: 'flex' }}>
                <ColorSelect id={todo.id} />
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo.id)}
                >
                  X
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList

// how to setState for select option
// place directly into todoList
// then place select into own component
// finish off all of the dispatch actions
