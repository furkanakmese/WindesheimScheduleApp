import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import Animation from 'lottie-react-native'
import loader from '../../../assets/animations/material_loader.json'


class Loading extends React.Component {
  render() {
    if(this.props.fetching) {
      return(
        <View style={styles.container}>
          <Animation
            ref={animation => {
              this.animation = animation
            }}
            style={{ width: 80, height: 80 }}
            loop={true}
            source={loader}
            autoPlay={true}
          />
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = (state) => ({
  fetching: state.root.fetching
})

export default connect(mapStateToProps)(Loading)
