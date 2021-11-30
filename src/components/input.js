import React, { useState } from 'react'
import '../styles.css'
import { useDispatch } from 'react-redux'
import store from '../store'

const Input = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'todos/todoAdded', payload: text })
    setText('')
  }

  return (
    <div className="form-box">
      <form className="form">
        <input
          type="text"
          className=""
          placeholder="what do you need to do?"
          value={text}
          onChange={handleInput}
        ></input>
        <button type="submit" className="" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default Input
