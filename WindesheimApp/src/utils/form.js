import React from 'react'
import { View, Picker, TextInput, Text, Switch } from 'react-native'


export const textInput = (props) => {
  const { input, textColor, fontSize, defaultValue, ...inputProps } = props
  return (
    <View>
      <TextInput
        style={{ height: 50, fontSize: fontSize, fontFamily: 'Montserrat-Regular', color: textColor, height: '100%', width: '100%' }}
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        defaultValue={defaultValue}
        // value={`${input.value}`}
        placeholderTextColor={textColor}
        underlineColorAndroid={textColor}
      />
    </View>
  )
}

export const pickerInput = ({ input: { onChange }, initialValue, textColor, type, values, label, selectedValue, onValueChange }) => {
  return (
    <Picker mode="dropdown" onValueChange={onChange} selectedValue={initialValue} style={{ backgroundColor: 'blue' }}>
      <Picker.Item value="dark" label="Dark" color={textColor} />
      <Picker.Item value="light" label="Light" color={textColor} />
    </Picker>
  )
}

export const renderSwitch = ({ label, input: { value, onChange }, trackColor, selectedValue, onValueChange }) => {
  console.log(value)
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Switch onValueChange={onChange} value={value} trackColor={trackColor} />
    </View>
  )
}
