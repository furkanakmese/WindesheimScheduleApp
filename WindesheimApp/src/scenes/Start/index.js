import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import { Text, Button } from '../../components'


class Start extends React.Component {
  constructor() {
    super()

    this.handleContinue = this.handleContinue.bind(this)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text bold style={styles.title}>Windesheim schedule app</Text>
        <Text style={styles.subTitle}>Made by Furkan Akmese</Text>
        <View style={styles.button}><Button onPress={this.handleContinue}>Get started</Button></View>
      </View>
    )
  }

  handleContinue() {
    this.props.navigation.navigate('SetClass')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FCFFFC'
  },
  title: {
    paddingTop: 20,
    fontSize: 24
  },
  subTitle: {
    paddingTop: 15
  },
  button: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'center'
  }
})

export default Start
