import React from 'react';
import {TextInput} from 'react-native';

export const TextInputComponent = ({value, onChangeText, name, ...props}) => (
  <TextInput
    value={value}
    onChangeText={value => onChangeText(name, value)}
    {...props}
  />
);
