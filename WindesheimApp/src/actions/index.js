import axios from 'axios'

export const SET_CLASS_SUCCESS = 'SET_CLASS_SUCCESS'
export const GET_SCHEDULE_FETCHING = 'GET_SCHEDULE_FETCHING'
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS'
export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR'
export const SET_THEME_SUCCESS = 'SET_THEME_SUCCESS'


export const setClass = (values) => {
  return dispatch => {
    dispatch(setClassSuccess(values))
  }
}

const setClassSuccess = (values) => ({
  type: SET_CLASS_SUCCESS,
  payload: {
    class: values
  }
})

export const getSchedule = (data) => {
  return dispatch => {
    dispatch(getScheduleFetching())
    axios.get('http://api.windesheim.nl/api/Klas/' + data + '/Les')
    .then((data) => {
      dispatch(getScheduleSuccess(data.data))
    })
    .catch((error) => {
      dispatch(getScheduleError())
      console.log(error)
    })
  }
}

const getScheduleFetching = () => ({
  type: GET_SCHEDULE_FETCHING
})

const getScheduleSuccess = (schedule) => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: {
    schedule: schedule
  }
})

const getScheduleError = () => ({
  type: GET_SCHEDULE_ERROR,
  payload: {
    error: 'Error while getting schedule'
  }
})

export const setTheme = (value) => {
  return dispatch => {
    dispatch(setThemeSuccess(value))
  }
}

const setThemeSuccess = (value) => ({
  type: SET_THEME_SUCCESS,
  payload: {
    theme: value
  }
})
