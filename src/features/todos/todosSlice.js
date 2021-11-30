import { v4 as uuidv4 } from 'uuid'

const initialState = [
  {
    id: uuidv4(),
    text: 'first task',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'second task',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'third task',
    completed: false,
  },
]

export default function TodosReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'todos/todoAdded':
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload,
          completed: false,
        },
      ]
    case 'todos/todoToggled':
      return [
        ...state.map((todo) => {
          if (todo.id !== payload) {
            return todo
          }
          return { ...todo, completed: !todo.completed }
        }),
      ]

    case 'todos/colorSelected':
      return [
        ...state.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, color: payload.color }
          } else {
            return todo
          }
        }),
      ]
    case 'todos/todoDeleted':
      return [...state.filter((todo) => todo.id !== payload)]
    case 'todos/allCompleted':
      return [
        ...state.map((todo) => {
          return { ...todo, completed: true }
        }),
      ]
    case 'todos/completedCleared':
      return [
        ...state.filter((todo) => {
          if (todo.completed === false) {
            return todo
          }
        }),
      ]
    default:
      return state
  }
}
