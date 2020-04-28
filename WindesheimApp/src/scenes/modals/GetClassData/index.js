import React from 'react'
import { View, StyleSheet } from 'react-native'
import moment from 'moment'

import { Modal, Text } from '../../../components'

class GetClassData extends React.Component {
  render() {
    const classData = this.props.navigation.state.params.data
    console.log(classData)
    return(
      <Modal onClose={this.props.navigation.pop}>
        <View style={styles.container}>
          <Text>From {moment.utc(classData.starttijd).format('H:mm')} until {moment.utc(classData.eindtijd).format('H:mm')}</Text>
          <View style={styles.seperator}></View>
          <Text>{classData.lokaal}</Text>
          <View style={styles.seperator}></View>
          <Text>Class: {classData.vaknaam}</Text>
          <View style={styles.seperator}></View>
          <Text>Teacher: {classData.docentnamen[0]}</Text>
          <View style={styles.seperator}></View>
          <Text>Comments: {classData.commentaar}</Text>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  seperator: {
    height: .8,
    backgroundColor: '#EFEFEF',
    marginTop: 8,
    marginBottom: 8
  }
})


export default GetClassData
