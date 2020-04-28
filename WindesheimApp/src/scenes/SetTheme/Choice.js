import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'

import { Text } from '../../components'


class Choice extends React.Component {
  render() {

    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: this.props.selected ? '#C7C7CD' : '#EEEEEE'
      },
      innerContainer: {
        width: '50%',
        height: '50%',
        borderRadius: 15,
        backgroundColor: this.props.theme === 'light' ? '#FFFFFF' : '#000000'
      }
    })

    return(
      <View style={{ backgroundColor: 'transparent', borderRadius: 15, alignItems: 'center' }}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#EEEEEE', true)} onPress={this.props.handleSetTheme}>
          <View style={styles.container}>
            <View style={styles.innerContainer}></View>
          </View>
        </TouchableNativeFeedback>
        <Text>{this.props.theme.charAt(0).toUpperCase() + this.props.theme.slice(1)}</Text>
      </View>
    )
  }
}


export default Choice
