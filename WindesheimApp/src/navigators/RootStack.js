import { Animated, Easing } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import createMainStack from './MainStack'
import GetClassData from '../scenes/modals/GetClassData'


export default (initialRouteName) => createStackNavigator({
  Main: {
    screen: createMainStack(initialRouteName)
  },
  GetClassData: {
    screen: GetClassData,
  }
}, {
  mode: 'card',
  headerMode: 'none',
  transparentCard: true,
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: (transitionProps, prevTransitionProps, isModal) => ({
    // containerStyle: {
    //   backgroundColor: '#6C69F6'
    // },
    screenInterpolator: (props) => {
      const { layout, position, scene } = props
      const { index, route: { routeName }} = scene
      const height = layout.initHeight
      const offset = (routeName === 'Main') ? 0 : (index * 24)

      const translateX = 0
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, offset, offset]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      });

      return {
        opacity,
        transform: [{ translateX }, { translateY }]
      }
    }
  })
})
