import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from '../button.native';

storiesOf('Button', module).add('basic', () => (
  <Button title="Button" />
));
