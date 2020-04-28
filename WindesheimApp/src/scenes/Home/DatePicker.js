import React from 'react'
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

import { Text } from '../../components'


class DatePicker extends React.Component {
  constructor() {
    super()

    this.state = {
      currentDate: moment(new Date())
    }
  }

  updateParentState(date) {
    this.props.updateParentState(date)
    this.setState({ currentDate: moment(date) })
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: 80,
        paddingLeft: 17,
        paddingRight: 17,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: this.props.theme === 'light' ? '#FCFFFC' : '#00120B'
      },
      secondaryDate: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: this.props.theme === 'light' ? '#FCFFFC' : '#00120B'
      },
      primaryDate: {
        width: 65,
        height: 65,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        backgroundColor: '#D72638'
      }
    })

    return(
      <View style={styles.container}>
        <GestureRecognizer
          onSwipeLeft={() => this.updateParentState(this.state.currentDate.clone().add(1, 'd').format('YYYY-MM-DD'))}
          onSwipeRight={() => this.updateParentState(this.state.currentDate.clone().subtract(1, 'd').format('YYYY-MM-DD'))}
          config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}
          style={styles.container}
        >
          <View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().subtract(3, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().subtract(3, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().subtract(3, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().subtract(2, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().subtract(2, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().subtract(2, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().subtract(1, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().subtract(1, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().subtract(1, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.primaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.format('YYYY-MM-DD'))}>
              <View style={styles.primaryDate}>
              <Text style={{ fontSize: 22, color: '#FCFFFC' }}>{this.state.currentDate.format("DD")}</Text>
              <Text style={{ fontSize: 15, color: '#FCFFFC' }}>{this.state.currentDate.format("dddd").substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().add(1, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().add(1, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().add(1, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View><View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().add(2, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().add(2, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().add(2, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.secondaryDate}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#FA315A', true)} onPress={() => this.updateParentState(this.state.currentDate.clone().add(3, 'd').format('YYYY-MM-DD'))}>
              <View style={styles.secondaryDate}>
                <Text style={{ fontSize: 17 }}>{this.state.currentDate.clone().add(3, 'd').format('DD')}</Text>
                <Text style={{ fontSize: 14 }}>{this.state.currentDate.clone().add(3, 'd').format('dddd').substring(0, 2)}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </GestureRecognizer>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.root.theme
})

export default connect(mapStateToProps)(DatePicker)
