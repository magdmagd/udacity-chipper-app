import { getInitialData } from './api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () 
{
  return (dispatch) => 
  {
    return getInitialData()
      .then(({ users, tweets }) =>
       {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
       })
  }//end return (dispatch)
}//end export 


