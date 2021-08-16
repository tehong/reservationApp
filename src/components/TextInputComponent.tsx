import React from 'react';
import {TextInput} from 'react-native';

export const TextInputComponent = ({
  value,
  onChangeText,
  name,
  ...props
}: {
  value: string;
  onChangeText: (name: string, text: string) => void;
  name: string;
}) => (
  <TextInput
    value={value}
    onChangeText={text => onChangeText(name, text)}
    {...props}
  />
);
