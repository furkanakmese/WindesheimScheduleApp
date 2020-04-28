import { AsyncStorage } from 'react-native'


export const getIsNew = async () => {
  try {
    isNew = await AsyncStorage.getItem('new')
    if(isNew === '' || isNew === 'true' || isNew === null) {
      return true
    } else if(isNew === 'false') {
      return false
    }
  } catch(error) {
    return true
  }
}

export const setNew = async (state) => {
  const newState = state ? 'true' : 'false'
  await AsyncStorage.setItem('new', newState)
}

export const getInitialRouteName = (state) => {
  return state.root.new ? 'Start' : 'Home'
}
