import * as ACT from '../actions';
const initialState = {
  loggedIn: false,
  user: null
}

export const authenticateUser = user => {
  return {
    type: ACT.AUTH_LOGIN,
    user
  }
}

export const deauthenticateUser = () => {
  return {
    type: ACT.AUTH_LOGOUT
  }
}

export default function(state = initialState, action) {
  console.log('action ~~>', action);
  switch (action.type) {
    case ACT.AUTH_LOGIN:
      return { ...state, loggedIn: true, user: action.user }
    case ACT.AUTH_LOGOUT:
      return { ...state, loggedIn: false, user: null }
    default:
      return state;
  }
}
