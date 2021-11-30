import React, { useState } from 'react'
import '../styles.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })
  const completeAll = () => {
    dispatch({ type: 'todos/allCompleted' })
  }
  const clearCompleted = () => {
    dispatch({ type: 'todos/completedCleared' })
  }
  const { status, colors } = useSelector((state) => state.filters)
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={completeAll}>
          Mark All Completed
        </button>
        <button className="button" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>

      <span>Tasks to do: {todosRemaining}</span>
      <div className="filters statusFilters">
        <h5>Filter by Status</h5>
        <ul>
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
