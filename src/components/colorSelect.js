import React from 'react'
import { useDispatch } from 'react-redux'

const ColorSelect = ({ id }) => {
  const dispatch = useDispatch()

  const handleColorSelect = (e) => {
    dispatch({
      type: 'todos/colorSelected',
      payload: { id, color: e.target.value },
    })
  }

  return (
    <select className="colorPicker" onChange={(e) => handleColorSelect(e)}>
      <option value=""></option>
      <option value="green">green</option>
      <option value="blue">blue</option>
      <option value="orange">orange</option>
      <option value="purple">purple</option>
      <option value="red">red</option>
    </select>
  )
}

export default ColorSelect
