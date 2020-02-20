import { action } from 'easy-peasy'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default {
  ...initialState,
  addTodo: action((state, text) => {
    const item = {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }
    return [ ...state, item ]
  }),
  deleteTodo: action((state, id) => {
    return state.filter(todo =>
      todo.id !== action.id
    )
  }),
  editTodo: action((state, {id, text}) => {
    return state.map(todo =>
      todo.id === id ?  { ...todo, text } : todo
    )
  }),
}
//    case COMPLETE_TODO:
//      return state.map(todo =>
//                todo.id === action.id ?
//                  { ...todo, completed: !todo.completed } :
//                  todo
//              )
//
//    case COMPLETE_ALL_TODOS:
//      const areAllMarked = state.every(todo => todo.completed)
//      return state.map(todo => ({
//                ...todo,
//                completed: !areAllMarked
//              }))
//
//    case CLEAR_COMPLETED:
//      return state.filter(todo => todo.completed === false)
//
//    default:
//      return state

