import React from 'react'
import { StyleSheet, FlatList, View, TouchableNativeFeedback, ScrollView } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { Text, AnimationBox, Loading, Modal } from '../../components'

class LessonList extends React.Component {
  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
    this.renderSeperator = this.renderSeperator.bind(this)

    this.state = { refreshing: false }
  }

  render() {
    if(this.props.lessons.length) {
      return(
        <View style={styles.container}>
          <View style={{ paddingBottom: 10 }}><Text bold>Classes</Text></View>
          <FlatList
            data={this.props.lessons}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeperator}
          />
        </View>
      )
    } else if(!this.props.fetching) {
      return (
        <View style={styles.animationContainer}>
          <AnimationBox noResults message={!this.props.class ? "No class selected" : (this.props.error.length ? this.props.error : "No classes for this day")} />
        </View>
      )
    } else {
      return <View style={styles.loading}><Loading /></View>
    }
  }

  renderItem(item) {
    return (
      <ScrollView>
        <View style={{ borderRadius: 15, backgroundColor: 'transparent' }}>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.props.navigation.navigate('GetClassData', { data: item.item })}>
            <View style={styles.listItem}>
              <View style={styles.timeBox}>
                <Text bold style={styles.time}>{moment.utc(item.item.starttijd).format('H:mm')}</Text>
                <Text bold style={styles.time}>{moment.utc(item.item.eindtijd).format('H:mm')}</Text>
              </View>
              <Text style={{ fontSize: 18 }}>{item.item.commentaar}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    )
  }

  renderSeperator() {
    return (
      <View style={styles.seperator}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    borderRadius: 15,
    height: 70,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  timeBox: {
    backgroundColor: '#D72638',
    height: 55,
    width: 55,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  time: {
    color: '#FFFFFF',
    fontSize: 15
  },
  seperator: {
    height: 1.3,
    backgroundColor: '#EFEFEF',
  },
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loading: {
    justifyContent: 'center',
    height: '100%'
  }
})

const mapStateToProps = (state) => {
  return {
    class: state.root.class,
    schedule: state.root.schedule,
    fetching: state.root.fetching,
    error: state.root.error
  }
}

export default connect(mapStateToProps)(LessonList)
