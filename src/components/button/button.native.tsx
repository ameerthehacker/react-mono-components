import React from 'react';
import { Button as RNButton } from 'react-native';
import { ButtonProps } from './api';

const noop = () => null;

export default function Button({ title, onClick }: ButtonProps) {
  return <RNButton title={title} onPress={onClick || noop}></RNButton>;
}
