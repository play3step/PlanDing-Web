const USER_INFO = 'USER_INFO'

export const userInfo = (userName, code, profileImage) => ({
  type: USER_INFO,
  payload: { userName, code, profileImage }
})

const initialState = {
  user: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default userReducer
