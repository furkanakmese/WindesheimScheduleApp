import React from 'react'
import { AsyncStorage, View } from 'react-native'


export const setClass = async (value) => {
  const resultJSON = await AsyncStorage.getItem('class')
  const classObject = {"class": value}
  const classString = JSON.stringify(classObject)
  await AsyncStorage.setItem('class', classString)
}

export const getClass = async () => {
  try {
    const classString = await AsyncStorage.getItem('class')
    const resultJSON = JSON.parse(classString)
    return resultJSON['class']
  } catch(error) {
    return ''
  }
}
