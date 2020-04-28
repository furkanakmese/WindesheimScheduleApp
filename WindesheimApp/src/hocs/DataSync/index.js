import React from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../../actions'


class DataSync extends React.Component {
  componentWillMount() {
    this.getInitialData()
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <StatusBar
           backgroundColor={this.props.theme === 'light' ? '#FCFFFC' : (this.props.theme === 'dark' ? '#00120B' : '#0000ff')}
           barStyle={this.props.theme === 'light' ? 'dark-content' : (this.props.theme === 'dark' ? 'light-content' : 'dark-content')}
         />
        {this.props.children}
      </View>
    )
  }

  getInitialData() {
    if(this.props.class && !this.props.schedule.length) {
      this.props.dispatch(actions.getSchedule(this.props.class))
    }
  }
}

const mapStateToProps = (state) => ({
  class: state.root.class,
  schedule: state.root.schedule,
  theme: state.root.theme
})

export default connect(mapStateToProps)(DataSync)
