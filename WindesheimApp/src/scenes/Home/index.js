import React from 'react'
import { StyleSheet, View, RefreshControl } from 'react-native'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import moment from 'moment'

import getSchedule from '../../utils/schedule'
import Header from './Header'
import LessonList from './LessonList'
import DatePicker from './DatePicker'


class Home extends React.Component {
  constructor() {
    super()

    this.handleRefresh = this.handleRefresh.bind(this)
    this.state = { date: moment().format('YYYY-MM-DD') + 'T00:00:00Z', refreshing: false }
  }

  updateDate(date) {
    this.setState({ date: date + 'T00:00:00Z' })
  }

  render() {
    const lessons = getSchedule(this.props.schedule, this.state.date)
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
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.handleRefresh}>
          <Header />
          <DatePicker updateParentState={this.updateDate.bind(this)}/>
          <View style={{ height: 50 }}></View>
          <View style={{ height: '65%' }}><LessonList lessons={lessons} navigation={this.props.navigation}/></View>
        </RefreshControl>
      </View>
    )
  }

  async handleRefresh() {
    this.setState({
      refreshing: true
    })

    await this.props.dispatch(actions.getSchedule(this.props.class))

    this.setState({
      refreshing: false
    })
  }
}

const mapStateToProps = (state) => ({
  schedule: state.root.schedule,
  theme: state.root.theme,
  class: state.root.class
})

export default connect(mapStateToProps)(Home)
