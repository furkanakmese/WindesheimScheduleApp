import {
  SET_CLASS_SUCCESS,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_FETCHING,
  SET_THEME_SUCCESS,
  GET_SCHEDULE_ERROR
} from '../actions'

export default function rootReducer(state = {}, { type, payload }) {
  switch (type) {
    case SET_CLASS_SUCCESS:
      return {...state, class: payload.class}
    case GET_SCHEDULE_FETCHING:
      return {...state, error: '', fetching: true}
    case GET_SCHEDULE_SUCCESS:
      return {...state, error: '', fetching: false, schedule: payload.schedule}
    case GET_SCHEDULE_ERROR:
      return {...state, error: payload.error, fetching: false}
    case SET_THEME_SUCCESS:
      return {...state, error: '', fetching: false, theme: payload.theme}
    default:
      return state
  }
}
