import { createStore, combineReducers, applyMiddleware } from 'redux'
import calendarReducer from '../modules/calendar'
import scheduleReducer from '../modules/schedule/scheduleUpdate'
import userReducer from '../modules/user'
import { thunk } from 'redux-thunk'
import groupReducer from '../modules/schedule/scheduleGroup'
import createModalReducer from '../modules/modal/createGroup'

const rootReducer = combineReducers({
  calendar: calendarReducer,
  schedule: scheduleReducer,
  users: userReducer,
  groups: groupReducer,
  createModal: createModalReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // redux-thunk 미들웨어를 적용합니다.
)
export default store
