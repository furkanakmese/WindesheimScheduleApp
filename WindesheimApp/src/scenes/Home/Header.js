import React from 'react'
import { StyleSheet, View } from 'react-native'
import moment from 'moment'

import { Text } from '../../components'

class Header extends React.Component {
  constructor() {
    super()

    this.state = { date: moment().format('dddd Do MMMM') }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.date}>{this.state.date}</Text>
        <Text bold style={{ fontSize: 28 }}>Schedule</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: StyleSheet.hairlineHeight
  },
  date: {
    fontSize: 16,
    color: '#B5B5B5'
  }
})

export default Header
