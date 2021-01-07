import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'


export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
}) 