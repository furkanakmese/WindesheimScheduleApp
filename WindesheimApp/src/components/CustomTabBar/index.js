import React from 'react'
import { View, TouchableNativeFeedback, Platform, Keyboard } from 'react-native'
import { BottomTabBar } from 'react-navigation'
import { connect } from 'react-redux'

import { Text } from '../index'


class CustomTabBar extends React.Component {
  constructor() {
    super()

    this.state = { visible: true }
  }

  componentDidMount() {
    if (Platform.OS !== 'ios') {
      this.keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', this.visible(false)),
        Keyboard.addListener('keyboardDidHide', this.visible(true))
      ]
    }
  }

  componentWillUnmount() {
    this.keyboardEventListeners.forEach((eventListener) => eventListener.remove())
  }

  visible = visible => () => this.setState({ visible })

  render() {
    if(!this.state.visible) return null
    return(
      <View>
        <BottomTabBar
          style={{
            backgroundColor: this.props.theme === 'light' ? '#FFFFFF' : '#1E1E1E',
          }}
          {...this.props}
          activeTintColor={this.props.theme === 'light' ? '#00120B' : '#FCFFFC'}
          inactiveTintColor={this.props.theme === 'light' ? '#C7C7CD' : '#4B4C4E'}
        />
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  theme: state.root.theme
})

export default connect(mapStateToProps)(CustomTabBar)
