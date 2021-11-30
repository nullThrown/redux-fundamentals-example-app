import { v4 as uuidv4 } from 'uuid'

const initialState = {
  filters: {
    status: '',
    colors: [],
  },
}

export default function filtersReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'filters/statusFilterChanged':
      return { ...state, status: payload }

    case 'filters/colorFilterChanged':
      return

    default:
      return state
  }
}
