import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={[labelStyle, props.labelStyle]}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        style={[inputStyle, props.style]}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={props.placeholderColor}
        underlineColorAndroid="transparent"
        onSelectionChange={props.onSelectionChange}
        onFocus={props.onFocus}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    lineHeight: 5,
    flex: 1,
    height: 50,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: 'black',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};
export { Input };
