import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { StackActions, NavigationActions } from 'react-navigation'

import { setNew } from '../../utils/navigator'
import { Text, Button } from '../../components'
import SetThemeForm from './SetThemeForm'


class SetTheme extends React.Component {
  constructor() {
    super()

    this.handleContinue = this.handleContinue.bind(this)
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: this.props.theme === 'light' ? '#FCFFFC' : '#00120B',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 20
      }
    })

    return(
      <View style={styles.container}>
        <Text bold style={styles.title}>Select a theme</Text>
        <SetThemeForm />
        <View style={{ paddingTop: 100, width: '100%' }}><Button onPress={this.handleContinue}>Finish</Button></View>
      </View>
    )
  }

  handleContinue() {
    setNew(false)
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Main', action: NavigationActions.navigate({ routeName: 'Home' }) })],
      }),
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.root.theme
})

export default connect(mapStateToProps)(SetTheme)
