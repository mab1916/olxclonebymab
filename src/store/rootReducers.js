import { combineReducers } from 'redux'
import ProductReducer from './reducers/productReducer'
import AuthReducer from './reducers/AuthReducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  ProductReducer,
  AuthReducer
})

export default rootReducer;