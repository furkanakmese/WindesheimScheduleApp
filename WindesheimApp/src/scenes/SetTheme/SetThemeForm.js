import React from 'react'
import { StyleSheet, View, Text, Button, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { setTheme } from '../../utils/theme'
import Choice from './Choice'

class SetThemeForm extends React.Component {
  constructor() {
    super()

    this.handleSetLight = this.handleSetLight.bind(this)
    this.handleSetDark = this.handleSetDark.bind(this)

    this.state = {
      lightIsSelected: false, darkIsSelected: false
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{ height: 300, width: '50%', padding: 10 }}>
          <Choice theme='light' selected={this.state.lightIsSelected} handleSetTheme={this.handleSetLight}/>
        </View>
        <View style={{ height: 300, width: '50%', padding: 10 }}>
          <Choice theme='dark' selected={this.state.darkIsSelected} handleSetTheme={this.handleSetDark}/>
        </View>
      </View>
    )
  }

  handleSetLight() {
    this.setState({ lightIsSelected: true, darkIsSelected: false })
    this.props.dispatch(actions.setTheme('light'))
    setTheme('light')
  }
  handleSetDark() {
    this.setState({ lightIsSelected: false, darkIsSelected: true })
    this.props.dispatch(actions.setTheme('dark'))
    setTheme('dark')
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})


export default connect()(SetThemeForm)
