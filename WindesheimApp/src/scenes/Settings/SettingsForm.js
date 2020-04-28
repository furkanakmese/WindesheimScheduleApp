import React from 'react'
import { View, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { Text } from '../../components'
import { textInput, pickerInput, renderSwitch } from '../../utils/form'


class SettingsForm extends React.Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
  }

  render() {
    return(
      <View style={{ width: '100%' }}>
        <View style={{ height: 65 }}>
          <Text>Class</Text>
          <Field
            name='class_id'
            component={textInput}
            placeholder='your class'
            placeholderTextColor={this.props.textColor}
            returnKeyType='done'
            textColor={this.props.textColor}
            fontSize={30}
            defaultValue={this.props.class}
            onSubmitEditing={(value) => this.props.handleSubmit(value)}
          />
        </View>
        <View style={{ paddingTop: 45 }}>
          <Text>Theme</Text>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ paddingRight: 10 }}>Darkmode enabled</Text>
            <Field
              name='theme'
              component={renderSwitch}
              onChange={(value) => this.onChange(value)}
              trackColor='#D72638'
            />
          </View>
        </View>
      </View>
    )
  }
  onChange(value) {
    this.props.handleValueChange(value)
  }
}

export default reduxForm({
  form: 'SettingsForm'
})(SettingsForm)
