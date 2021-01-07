import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'
import {RECEIVE_USERS} from '../actions/users'

export default function users (state = {}, action) 
{
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
/*case TOGGLE_TWEET :
        return {
          ...state,
          [action.id]
         /* [action.id]:
          {
            ...state[action.id],
            likes: action.hasLiked === true ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
          }
           }*/ 
    default :
      return state
  }//end switch 
} //end users 