import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import Animation from 'lottie-react-native'
import empty_box from '../../../assets/animations/empty_box.json'
import networkError from '../../../assets/animations/network_error.json'


import { Text } from '../index'

class AnimationBox extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#C7C7CD', true)}>
          <View style={styles.container}>
            <Animation
              ref={animation => {
                this.animation = animation
              }}
              style={{ width: 120, height: 120 }}
              loop={false}
              source={this.props.networkError ? networkError : (this.props.noResults ? empty_box : null)}
              autoPlay={true}
            />
            <Text style={{ fontSize: 16 }}>{this.props.message}{'\n'}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
})


export default AnimationBox
