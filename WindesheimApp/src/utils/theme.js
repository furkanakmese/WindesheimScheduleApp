import { AsyncStorage } from 'react-native'


export const getTheme = async () => {
  try {
    theme = await AsyncStorage.getItem('theme')
    return theme
  } catch(error) {
    return undefined
  }
}

export const setTheme = async (theme) => {
  await AsyncStorage.setItem('theme', theme)
}
