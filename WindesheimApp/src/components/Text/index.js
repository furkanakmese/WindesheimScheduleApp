import React from 'react'
import { View, Text as TextBase, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'


class Text extends React.Component {
  render() {

    const styles = StyleSheet.create({
      default: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        color: this.props.theme === 'light' ? '#00120B' : '#FCFFFC'
      },
      bold: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
      },
    })

    const style = StyleSheet.flatten([
      styles.default,
      this.props.bold ? styles.bold : undefined,
      this.props.style,
    ])

    return(
      <View>
        <TextBase style={style}>{this.props.children}</TextBase>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.root.theme
})

export default connect(mapStateToProps)(Text)
