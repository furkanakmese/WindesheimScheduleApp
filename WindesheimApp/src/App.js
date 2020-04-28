import React from 'react'
import { Animated, View, YellowBox, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'

import { configureStore } from './utils/store'
import { getInitialRouteName } from './utils/navigator'
import rootStack from './navigators/RootStack'
import { DataSync } from './hocs'

class FadeIn extends React.Component {
  constructor () {
    super()

    this.state = {
      opacity: new Animated.Value(0)
    }
  }

  componentWillMount () {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 400,
    }).start()
  }

  render () {
    const { children, style, ...rest } = this.props

    const containerStyle = {
      opacity: this.state.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      })
    }

    const styles = [containerStyle, style]

    return (
      <Animated.View style={styles} {...rest}>
        {children}
      </Animated.View>
    )
  }
}

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      store: undefined
    }
    YellowBox.ignoreWarnings(['Remote debugger', 'Async Storage'])
  }

  async componentDidMount () {
    const store = await configureStore()

    this.setState({ store })
  }

  render() {
    if (!this.state.store) {
      return <View />
    }

    const initialRouteName = getInitialRouteName(this.state.store.getState())
    return(
      <FadeIn style={{ flex: 1, backgroundColor: '#F7F9F8' }}>
        <Provider store={this.state.store}>
          <DataSync>
            {React.createElement(createAppContainer(rootStack(initialRouteName)))}
          </DataSync>
        </Provider>
      </FadeIn>
    )
  }
}
