import React from 'react'
import { StyleSheet, AsyncStorage, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { setClass } from '../../utils/class'
import { setNew } from '../../utils/navigator'
import { setTheme } from '../../utils/theme'

import SettingsForm from './SettingsForm'
import { Button, Text } from '../../components'

class Settings extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 17,
        backgroundColor: this.props.theme === 'light' ? '#FCFFFC' : '#00120B'
      }
    })

    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 24, paddingBottom: 40 }}>Settings</Text>
        <SettingsForm
          onSubmit={this.handleSubmit}
          handleValueChange={this.handleValueChange}
          textColor={this.props.theme === 'light' ? '#00120B' : '#FCFFFC'}
          theme={this.props.theme}
          class={this.props.class}
          initialValues={{theme: this.props.theme === 'light' ? false : true}}
        />
      </View>
    )
  }
  // <View style={{ marginTop: 300 }}><Button onPress={this.handleReset}>Reset</Button></View>

  handleSubmit(value) {
    console.log(value)
    this.props.dispatch(actions.setClass(value['class_id']))
    this.props.dispatch(actions.getSchedule(value['class_id']))
    setClass(value['class_id'])
  }

  handleValueChange(value) {
    const theme = value === true ? 'dark' : 'light'
    this.props.dispatch(actions.setTheme(theme))
    setTheme(theme)
  }

  handleReset() {
    setTheme('light')
    setNew(true)
  }
}

const mapStateToProps = (state) => ({
  theme: state.root.theme,
  class: state.root.class
})

export default connect(mapStateToProps)(Settings)
