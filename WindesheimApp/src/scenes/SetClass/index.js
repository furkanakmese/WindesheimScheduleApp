import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { setClass } from '../../utils/class'
import SetClassForm from './SetClassForm'
import { Text, Button } from '../../components'


class SetClass extends React.Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FCFFFC',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 30,
        paddingTop: 50
      }
    })

    return(
      <View style={styles.container}>
        <Text bold style={styles.title}>Type in your classcode</Text>
        <View style={{ paddingTop: 30, width: '100%' }}><SetClassForm onSubmit={this.handleSubmit}/></View>
      </View>
    )
  }

  handleSubmit(values) {
    this.props.dispatch(actions.setClass(values['class_id']))
    this.props.dispatch(actions.getSchedule(values['class_id']))
    setClass(values['class_id'])
    this.props.navigation.navigate('SetTheme')
  }
}

const mapStateToProps = (state) => ({
  theme: state.root.theme,
})

export default connect(mapStateToProps)(SetClass)
