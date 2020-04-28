import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { Text, Button } from '../../components'
import { textInput } from '../../utils/form'


class SetClassForm extends React.Component {
  render() {
    return(
      <View style={{ width: '100%' }}>
        <View style={{ height: 60, width: '100%' }}>
          <Field
            name='class_id'
            component={textInput}
            placeholder='Like ICTSE1f'
            returnKeyType='next'
            fontSize={30}
            textColor='#C7C7CD'
          />
        </View>
        <View style={{ paddingTop: 50 }}>
          <Button onPress={this.props.handleSubmit}>Continue</Button>
        </View>
      </View>
    )
  }
}


export default reduxForm({
  form: 'SetClassForm'
})(SetClassForm)
