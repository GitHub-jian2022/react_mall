import { LOGIN } from '../actionType/usersType'
import { GET_USER_INFO } from '../actionType/usersType'

const initState = {
  token: '',
  user: {

  }
}
export default (state = initState, action) => {
  const { type, data } = action
  if(type === LOGIN) {
    const newState = state
    newState.token = data
    return newState
  }else if(type === GET_USER_INFO) {
    const newState = state
    newState.user = data
    return newState
  }
  return state
}