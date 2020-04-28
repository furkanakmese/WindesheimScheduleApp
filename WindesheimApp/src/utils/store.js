import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { getClass } from './class'
import { getTheme } from './theme'
import { getIsNew } from './navigator'
import rootReducer from '../reducers'


let store

export const configureStore = async () => {
  const initialState = {
    root: {
      class: '',
      schedule: [],
      theme: 'light',
    }
  }

  const reducers = {
    root: rootReducer,
    form: formReducer
  }

  const reducer = combineReducers(reducers)

  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => !action.type.startsWith('@') && !(action.payload instanceof Promise)
  })

  const classData = await getClass()
  const theme = await getTheme()
  const isNew = await getIsNew()

  if(classData) {
    initialState.root.class = classData
  }

  if(theme) {
    initialState.root.theme = theme
  }

  if(isNew) {
    initialState.root.new = isNew
  }

  store = createStore(reducer, initialState, compose(applyMiddleware(thunk, logger)))

  return getStoreInstance()
}

export const getStoreInstance = () => {
  return store
}
