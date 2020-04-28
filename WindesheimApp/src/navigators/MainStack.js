import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation'

import Start from '../scenes/Start'
import SetClass from '../scenes/SetClass'
import SetTheme from '../scenes/SetTheme'
import TabNavigator from './TabNavigator'


export default (initialRouteName) => createStackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: null
    }
  },
  SetClass: {
    screen: SetClass,
    navigationOptions: {
      header: null
    }
  },
  SetTheme: {
    screen: SetTheme,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    }
  },
},{
  initialRouteName,
})
