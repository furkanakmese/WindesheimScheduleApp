import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Text, CustomTabBar, CustomTabBarItem } from '../components'
import Home from '../scenes/Home'
import Settings from '../scenes/Settings'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={28} style={{ color: tintColor }} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={28} style={{ color: tintColor }} />
      )
    }
  }
}, {
  tabBarComponent: CustomTabBar,
  defaultNavigationOptions: () => ({
    tabBarButtonComponent: TouchableOpacity,
  }),
  tabBarOptions: {
    showLabel: false,
  }
})

export default TabNavigator
