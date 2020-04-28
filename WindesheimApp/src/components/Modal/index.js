import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'

import { Text } from '../index'


class Modal extends React.Component {
  constructor() {
    super()

    this.handleClickClose = this.handleClickClose.bind(this)
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      innerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '45%',
        alignItems: 'center',
        backgroundColor: this.props.theme === 'light' ? '#FFFFFF' : '#1E1E1E',
        paddingTop: 30,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderTopWidth: this.props.theme === 'light' ? 1 : 0,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        marginTop: 10,
      },
      closeContainer: {
        alignItems: 'center',
        width: 50,
      }
    })

    return (
      <TouchableWithoutFeedback onPress={this.handleClickClose}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={this.handleClickClose}
            >
              <Icon name="keyboard-arrow-down" size={28} style={{ color: this.props.theme === 'light' ? '#1E1E1E' : '#FCFFFC' }}/>
            </TouchableOpacity>
            {this.props.children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  handleClickClose() {
    this.props.onClose && this.props.onClose()
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.root.theme
  }
}

export default connect(mapStateToProps)(Modal)
