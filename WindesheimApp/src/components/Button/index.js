import React from 'react'
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native'

import { Text } from '../index'


const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#37D2B8'
  },
  textButton: {
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FCFFFC',
    fontFamily: 'Montserrat-SemiBold',
  },
  black: {
    color: '#00120B'
  },
})

class Button extends React.Component {
  render() {
    const style = StyleSheet.flatten([
      styles.button,
      this.props.style,
      this.props.text ? styles.textButton : undefined,
    ])

    const textStyle = StyleSheet.flatten([
      styles.text,
      this.props.black ? styles.black : undefined,
    ])

    return(
      <View style={{ borderRadius: 10, backgroundColor: 'transparent' }}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000000', true)} onPress={this.props.onPress}>
          <View style={style}>
            <Text style={textStyle}>{this.props.children}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

export default Button
